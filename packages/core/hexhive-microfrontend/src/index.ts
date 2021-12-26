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
	private router: Router;
	private template: string;

	private get_views?: (req: Request<any>) => Promise<{apps: MicrofrontendConfig[], views: ViewConfig[]}>

	constructor(opts: { get_views?: (user: any) => Promise<{apps: MicrofrontendConfig[], views: ViewConfig[]}> }) {
		this.get_views = opts.get_views;

		this.router = Router();
		this.template = readFileSync(path.join(__dirname, './templates/index.ejs'), 'utf8');

		this.mountStaticRoutes()
		this.setupViewEngine()
	}

	setupViewEngine(){
		this.router.get('/*', async (req, res) => {
			console.log("Route View")
			const viewResult = await this.get_views?.(req)
			if(viewResult){
				const { views, apps } = viewResult;

				res.send(ejs.render(this.template, {
					isLocal: true, 
					title: 'Hello World', 
					base: req.baseUrl,
					config_url: `${req.baseUrl}/static/root-config.js`,
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