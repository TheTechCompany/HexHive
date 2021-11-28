import IPFSNode, {create, IPFS} from 'ipfs';
import { S3Datastore } from 'datastore-s3'
import S3 from 'aws-sdk/clients/s3'
import { S3Lock } from './S3Lock';
import { createS3Repo } from './createS3Store';

export class FileStore {
	private node?: IPFS;

	constructor(){
		

		this.writeFile = this.writeFile.bind(this);
		this.lsAsset = this.lsAsset.bind(this)
	}

	async init(){
		this.node = await create({
			repo: '/tmp/ipfs-datastore',
		})

		// const ls = this.node?.files.ls(`/Assets/`)
		// if(!ls) return;
		// for await (const file of ls){
		// 	console.log(file)
		// }
	}

	async readFile(assetId: string, path: string){
		const chunks = []
		const read = this.node?.files.read(`/Assets/${assetId}${path}`)
		if(!read) return;
		for await (const chunk of read) {
			chunks.push(chunk)
		}
		return Buffer.concat(chunks)
	}

	async writeFile(assetId: string, path: string, buffer: any){
		await this.node?.files.write(`/Assets/${assetId}${path}`, buffer, {create: true, parents: true})
	}

	async lsAsset(assetId: string){
		let assets = [];
		console.log("LS", assetId)
		const ls = this.node?.files.ls(`/Assets/${assetId}/`)
		if(!ls) return [];
		for await (const file of ls){
			assets.push({
				...file,
				path: `/${file.name}`,
				cid: file.cid.toString()
			})
		}
		return assets;
	}
}

