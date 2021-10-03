export interface WorkerTask {
	family: {
		zone: string, //Connection to use
		cluster: string, //Collection/Table/Type
		species: string, //KEY
	},
	reduce?: {key: string, sum?: string}
	collect: [string | {key: string, type: string}]
}