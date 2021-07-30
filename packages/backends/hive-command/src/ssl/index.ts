const greenlock = require('greenlock-express');
import path from 'path';
import EventEmitter from 'events'

import { mkdirSync, existsSync, writeFileSync } from 'fs';
export interface SSLManagerOpts {
    packageRoot: string;
    configDir: string;
    domain: string;
    altName?: string;
    maintainer?: string;
}

export class SSLManager extends EventEmitter {
    private greenlockManager : any;
    private configFile: string;

    private opts: SSLManagerOpts;

    constructor(opts: SSLManagerOpts){
        super();

        this.opts = opts;

        this.configFile = path.join(opts.configDir, '/config.json');

        this.ensureConfig();

        this.greenlockManager = greenlock.init({
            packageRoot: opts.packageRoot,
            configDir: opts.configDir,
            maintainerEmail: opts.maintainer,
            cluster: false
        })

        this.greenlockManager.ready((glx: {httpsServer: () => any}) => this.emit('https:init', glx.httpsServer())) 
    }

    ensureConfig(){
        if(!existsSync(this.configFile)){
            console.log("=> No config file found, creating one now")
            if(!existsSync(this.opts.configDir)) mkdirSync(this.opts.configDir, {recursive: true})
            writeFileSync(this.configFile, JSON.stringify({"sites": [{subject: this.opts.domain, altnames: [this.opts.altName]}]}))
            console.log(`=> Wrote config at ${this.configFile}`)
        }  
    }

    serve(app: any){
        this.greenlockManager.serve(app)
    }
}