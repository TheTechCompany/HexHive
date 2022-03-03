import crypto from 'crypto'
import { existsSync, readFileSync, writeFileSync } from 'fs';
import jwt from 'jsonwebtoken'
import { pem2jwk, RSA_JWK } from 'pem-jwk';
import os from 'os';

export class KeyManager {

	private privateKey?: string;
	private publicKey?: string;

	private _jwks: RSA_JWK[] = [];

	private keyLocation: string;

	constructor(){
		//TODO Don't store JWKS in temp
		this.keyLocation = os.platform() == 'win32' ? '.\hive-gateway-key.json' : '/data/jwks/hive-gateway-key.json'
	}

	get jwks(){
		if(!this.publicKey) return {keys: []}
		return {
			keys: this._jwks
		}
	}

	async init(){
		if(existsSync(this.keyLocation)){
			const keys = JSON.parse(readFileSync(this.keyLocation, 'utf8'))

			if(keys.privateKey && keys.publicKey){
				this.privateKey = keys.privateKey;
				this.publicKey = keys.publicKey;
			}
		}else{
			console.log("Generating keys....")

			const { privateKey, publicKey }  = await this.generateRSAKeyPair(2048)

			this.privateKey = privateKey
			this.publicKey = publicKey
			writeFileSync(this.keyLocation, JSON.stringify({
				privateKey,
				publicKey
			}), 'utf8')
		}
		if(this.publicKey){
			this._jwks = [pem2jwk(this.publicKey)]
		}
	}

	sign(payload: any){
		if(!this.privateKey) throw new Error('No private key set')
		return jwt.sign(payload, this.privateKey, {
			algorithm: 'RS256'
		})
	}

	setKeyPair(keys: {privateKey: string, publicKey: string}){
		this.privateKey = keys.privateKey
		this.publicKey = keys.publicKey
	}
	
	async generateRSAKeyPair(mod: number = 2048){
		return await new Promise<{privateKey: string, publicKey: string}>((resolve, reject) => {
			crypto.generateKeyPair('rsa', {
				modulusLength: mod,
				publicKeyEncoding: {
					type: 'spki',
					format: 'pem'
				},
				privateKeyEncoding: {
					type: 'pkcs8',
					format: 'pem',
					// cipher: 'aes-256-cbc',
					// passphrase: ''
				}
			}, (err, publicKey, privateKey) => {
				if(err) return reject(err);
				resolve({publicKey, privateKey})
			})
		})
	}
}