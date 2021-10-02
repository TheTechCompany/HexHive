/*
	Polls MSSQL Server and replicates through Kafka to the authorized graph

*/

import mssql from 'mssql';
import { WorkerTask } from './task';
import Patch from '@hexhive/patch'

export class MSSQLWorker {

	private pool?: mssql.ConnectionPool;
	private config : mssql.config;

	private task: WorkerTask;

	private patcher: Patch

	constructor(config: mssql.config, task: WorkerTask){
		this.config = config;
		this.task = task;

		this.patcher = new Patch({key: "JobID"})
	}

	async discover(){
		const result = await mssql.query`SELECT TABLE_NAME 
		FROM INFORMATION_SCHEMA.TABLES 
		WHERE TABLE_TYPE = 'BASE TABLE'`
		console.log(result)
	}

	async start(){
		this.pool = await mssql.connect(this.config)
		// await this.discover();
		setInterval(this.poll.bind(this, this.task), 2000)
	}

	getQuery(task: WorkerTask){
		let sql = 'SELECT ';

		sql += task.collect ? task.collect.join(', ') : '*'
		sql += ' FROM ' + task.family.cluster

		return sql;
	}

	newItem(value: any){
		console.log("NEW ", value)
	}

	updatedItem(ix: string, value: any){
		console.log("UPDATE ", ix, value)
	}

	removedItem(){

	}

	// parseAction(key: string, value: any){
	// 	if(Array.isArray(value) && value.length == 1){
	// 		this.newItem(value)
	// 	}else if(typeof(value) === 'object' && !Array.isArray(value)){
	// 		let update = {};
	// 		for(var k in value){
	// 			update[k] = value[k][1]
	// 		}
	// 		this.updatedItem(key, )
	// 	}
	// }

	async poll(task: WorkerTask){
		let q = this.getQuery(task)

		const result_q = await mssql.query(q)
		const result = result_q.recordset;
		
		const poll_patch = this.patcher.snapshot(result)

		if(!poll_patch) return;
		this.patcher.fastforward([], poll_patch)
		// for(var k in poll_patch){
		// 	console.log(k, poll_patch[k], typeof(poll_patch[k]), Array.isArray(poll_patch[k]))
		// }
	}

	diff(){

	}

	submit(){

	}
}