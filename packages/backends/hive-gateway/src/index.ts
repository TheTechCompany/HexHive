require("dotenv").config()

import dns from 'dns';

import { DefaultRouter } from "./routes"

import { HiveRouter } from "./router"
import { SchemaEndpoint, SchemaRegistry } from "./schema-registry"
import hive from "./schema/hive"
import { KeyManager } from "./keys"
import passport from "passport"
import nodemailer from 'nodemailer'

import { graphqlUploadExpress } from 'graphql-upload'
import { HiveDB } from "@hexhive/db-types"
import { nanoid } from 'nanoid';
import NodeRSA from 'node-rsa'
import { createChallenge, fromKey, getAnswer } from '@hexhive/crypto'

const {NODE_ENV} = process.env

const { PORT = (NODE_ENV == "production" ? 80 : 7000), AUTH_SITE = "https://next.hexhive.io", ISSUER = `http://localhost:${PORT}` } = process.env


export interface HiveGatewayOptions {
	dev: boolean;
	
	db: HiveDB;
	privateKey: string;
	endpoints?: SchemaEndpoint[];
	transporter?: nodemailer.Transporter;
}

export class HiveGateway {

	private router?: HiveRouter;


	private keyManager: KeyManager;

	private schemaRegistry?: SchemaRegistry;
	private schemaReloader?: NodeJS.Timer;

	private options : HiveGatewayOptions

	private db : HiveDB;

	private key: NodeRSA;

	private publicKey: string;

	constructor(opts: HiveGatewayOptions){
		
		this.db = opts.db;

		this.keyManager = new KeyManager();

		this.key = fromKey(opts.privateKey); 

		this.publicKey = this.key.exportKey('public')

		this.options = opts;
	
	}

	get isDev(){
		return this.options.dev
	}

	get jwtSecret(){
		return this.keyManager.publicKey
	}

	
	async init(){
		await this.keyManager.init()

		this.router = new HiveRouter({})

		await this.initHive();
		await this.initRouter()
		await this.schemaRegistry?.reload()

		this.schemaReloader = setInterval(async () => {
			console.debug("Reloading Schema...")
			await this.schemaRegistry?.reload()
		}, 60 * 1000);
	}

	get connect(){
		return this.router?.connect
	}

	get endpoints(){
		return this.schemaRegistry?.graphEndpoints || []
	}
	
	async initHive(){

		this.schemaRegistry = new SchemaRegistry({
			transporter: this.options.transporter,
			initialEndpoints: this.options.endpoints || [],
			schemaFactory: hive,
			keyManager: (payload: any) => this.keyManager.sign(payload),
			db: this.db
		});
	}

	initRouter(){
		// if(!this.neoDriver) return;
		this.router?.mount(DefaultRouter()) 

		this.router?.mount('*', (req: any, res: any, next: any) => {
			req.jwt = req.user;
			next()
		})
		
		this.router?.mount('/.well-known/jwks.json', (req: any, res: any) => {
			res.send(this.keyManager.jwks)
		})

		this.router?.connect.post('/register-endpoint', async (req, res) => {
			if(!req.ip) return;

			const application = await this.db.getApplicationByPublicKey(req.body.publicKey)
	
				const url = req.body.backend_url
				console.log(req.body.publicKey)
				const challenge = createChallenge(req.body.publicKey, url)

				const { id: challengeId } = await this.db.createApplicationChallenge(req.body.publicKey, url, {
					id: application?.id,
					name: req.body.name,
					slug: req.body.slug,
					backend_url: url, 
					entrypoint: req.body.entrypoint
				})

				res.send({
					publicKey: this.publicKey,
					challenge,
					challengeId
				})

		})

		this.router?.connect.post('/register-endpoint/challenge', async (req, res) => {
			
			const answer = getAnswer(this.key, req.body.answer)

			if(answer){
				let slug;

				const challenge = await this.db.getApplicationChallenge(req.body.publicKey, req.body.challengeId, answer)

				if(!challenge) return res.send({error: "Failed to verify identity"})
				
				if(!challenge.application?.id){

					let newSlug = challenge.application.slug || nanoid()
					const application = await this.db.getApplicationBySlug(newSlug)

					if(application){
						newSlug += '-'+nanoid().substring(0, 4)
					}

					await this.db.createApplication({
						id: nanoid(),
						name: challenge.application.name,
						slug: newSlug,
						publicKey: req.body.publicKey,
						backend_url: challenge.application.backend_url,
						entrypoint: challenge.application.entrypoint,
						// resources: challenge.application.resources
					});

					await this.schemaRegistry?.reload()

					slug = newSlug

				}else{
					//Any necessary updates
				}
				res.send({success: true, result: {slug}})
			}
		})

		if(!this.isDev){
			this.router?.mount('/graphql',  (req: any, res: any, next: any) => {
				if(req.user){
					next();
				}else{
					passport.authenticate(['jwt', 'headerapikey'], {session: false})(req, res, next)
				}
			})
		}
		this.router?.mount('/graphql', graphqlUploadExpress({maxFileSize: 100 * 1024 * 1024, maxFiles: 30}));
		this.router?.mount('/graphql', this.schemaRegistry?.middleware())

	}


}
