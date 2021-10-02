import fs, { writeFileSync } from 'fs';
import path from 'path';
import {diff, create, DiffPatcher, Delta, PatchContext} from 'jsondiffpatch'
// console.log(patch)

const PatchMiddleware = (ctx: PatchContext) => {
	console.log(ctx)
}

PatchMiddleware.filterName = "middleware"

export default class Patch {
	
	private diff: DiffPatcher;

	private last?: any[] = [];

	constructor(opts: {key?: string}){
		this.diff = create({
			arrays: {
				detectMove: true
			},
			objectHash: (obj: any) => {
				return opts.key ? obj[opts.key] : `${JSON.stringify(obj)}`
			}
		});


		(this.diff.processor.pipes.patch as any).debug = true;

		this.diff.processor.pipes.patch.before('trivial', PatchMiddleware)

        if(fs.existsSync('./last_dump.json')){
            this.last = JSON.parse(fs.readFileSync('./last_dump.json', 'utf-8'))
        }
	}


	snapshot(items: any[]){
		// if(fs.existsSync('./last_dump.json')){
        //     this.last = JSON.parse(fs.readFileSync('./last_dump.json', 'utf-8'))
        // }
		const patch = this.diff.diff(this.last, items)

		if(patch){
			writeFileSync('./patch.json', JSON.stringify(patch))
		}else{
			writeFileSync('./last_dump.json', JSON.stringify(items))
		}
		this.last = items;

		return patch;
	}

	fastforward(items: any[], patch: Delta){
		return this.diff.patch(items, patch)
	}
}

