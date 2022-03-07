import fs, { writeFileSync } from 'fs';
import path from 'path';
import {diff, create, DiffPatcher, Delta, PatchContext, dateReviver} from 'jsondiffpatch'

export default class Patch {
	
	private opts: {key: string, id: string};
	private diff: DiffPatcher;

	private last?: any[] = [];

	constructor(opts: {key: string, id: string}){
		this.opts = opts;
		this.diff = create({
			arrays: {
				detectMove: true
			},
			objectHash: (obj: any) => {
				return opts.key ? `${obj[opts.key]}` : `${JSON.stringify(obj)}`
			}
		});


		(this.diff.processor.pipes.patch as any).debug = true;

		// this.diff.processor.pipes.patch.before('trivial', PatchMiddleware)

        if(fs.existsSync(`./last_dump-${this.opts.id}.json`)){
            this.last = JSON.parse(fs.readFileSync(`./last_dump-${this.opts.id}.json`, 'utf-8'), dateReviver)
        }
	}

	find(ix: number){
		return this.last?.[ix]
	}


	snapshot(items: any[]){
	
		let snap = items.map((x) => {
			// console.log(x[this.opts.key])
			x[this.opts.key] = `${x[this.opts.key]}`
			return JSON.parse(JSON.stringify(x), dateReviver)
		})
		// if(fs.existsSync('./last_dump.json')){
        //     this.last = JSON.parse(fs.readFileSync('./last_dump.json', 'utf-8'))
        // }
		const patch = this.diff.diff(this.last, snap)

		if(patch){
			writeFileSync(`./patch-${this.opts.id}.json`, JSON.stringify(patch))
		}else{
			writeFileSync(`./last_dump-${this.opts.id}.json`, JSON.stringify(snap))
		}
		this.last = snap;

		return patch;
	}

	fastforward(items: any[], patch: Delta){
		return this.diff.patch(items, patch)
	}
}

