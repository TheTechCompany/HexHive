import express, { Router, Request } from 'express';
import path from 'path';
import ejs from 'ejs';
import { readFileSync } from 'fs';

export interface MicrofrontendConfig {
	config_url: string;
	name: string;
}

export interface ViewConfig {
	path: string;
	default?: boolean;
	name: string
}

export class HiveMicrofrontendServer {

	private name: string;

	private router: Router;
	private template: string;

	private apiUrl: string;

	private get_views?: (req: Request<any>) => Promise<{apps: MicrofrontendConfig[], views: ViewConfig[]}>

	constructor(opts: { 
		name: string, 
		get_views?: (user: any) => Promise<{apps: MicrofrontendConfig[], views: ViewConfig[]}>,
		apiUrl: string
	}) {

		this.apiUrl = opts.apiUrl;

		this.get_views = opts.get_views;
		this.name = opts.name;
		this.router = Router();
		this.template = readFileSync(path.join(__dirname, './templates/index.ejs'), 'utf8');

		this.mountStaticRoutes()
		this.setupViewEngine()
	}

	setupViewEngine(){
		this.router.get('/*', async (req, res) => {
			const viewResult = await this.get_views?.(req)
			if(viewResult){
				const { views, apps } = viewResult;

				res.send(ejs.render(this.template, {
					isLocal: true, 
					title: this.name || 'Hello World', 
					base: req.baseUrl,
					apiUrl: this.apiUrl,
					config_url: `${req.baseUrl}/static/root-config.js`,
					static_url: `${req.baseUrl}/static`,
					routes: views || [{
						path: '/app', 
						name: '@hexhive/test-app'
					}], 
					microfrontends: apps || [{
						config_url:"//localhost:8500/hexhive-test-app.js",
						name: "@hexhive/test-app"
					}]
				}))
			}
		
		})
	}

	mountStaticRoutes(){
		this.router.use('/static', express.static(path.join(__dirname, './static')));
	}

	routes(){
		return this.router;
	}

}