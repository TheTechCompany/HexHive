export interface WorkerTask {
	family: {
		zone: string, //Connection to use
		cluster: string, //Collection/Table/Type
		species: string, //KEY
	},
	type?: string;
	join?: {inner: {join: string, on: string}}
	group?: string[]
	reduce?: {key: string, to: string, sum?: string}
	collect: [{key: string, to: string, type: string, math?: string, keys?: string[]}]
}