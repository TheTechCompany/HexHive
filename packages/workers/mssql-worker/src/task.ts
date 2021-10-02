export interface WorkerTask {
	family: {
		zone: string, //Connection to use
		cluster: string, //Collection/Table/Type
	},
	collect: any
}