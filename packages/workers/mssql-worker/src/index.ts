/*
	Polls MSSQL Server and replicates through Kafka to the authorized graph

*/
import { EventEmitter } from 'events'
import mssql from 'mssql';
import { WorkerTask } from './task';
import Patch from '@hexhive/patch'

export class MSSQLWorker extends EventEmitter {

	private pool?: mssql.ConnectionPool;
	private config : mssql.config;

	private task: WorkerTask[];

	private patcher: {[key: string]: Patch} = {}

	constructor(config: mssql.config, task: WorkerTask[]){
		super();

		this.config = config;
		this.task = task;


		this.task.forEach((task) => {
			this.patcher[task.family.cluster] = new Patch({key: task.family.species, id: `${task.family.cluster}-${task.family.species}`})
		})
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
		this.task.forEach((task) => {
			setInterval(this.poll.bind(this, task), 2000)
		})
	}

	getQuery(task: WorkerTask){
		let sql = 'SELECT ';

		sql += task.collect && task.collect.length > 0 ? task.collect.map((x) => typeof(x) == "string" ? x : x.key).join(', ') : '*'
		sql += ' FROM ' + task.family.cluster

		return sql;
	}

	newItem(task: WorkerTask, value: any){
		this.emit(`NEW`, {value, id: task.family.cluster})
	}

	updatedItem(task: WorkerTask, ix: number, value: any){
		this.emit(`UPDATE`, {valueId: this.patcher[task.family.cluster].find(ix)[task.family.species], value, id: task.family.cluster})
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
		let result : any[] = result_q.recordset.map((item) => {
			return task.collect.map((collect) => {
				if(typeof(collect) == "object"){
					switch(collect.type){
						case 'Date':
							return {[collect.key]: new Date(item[collect.key])}
						default:
							return {[collect.key]: item[collect.key]}
					}
					// if(collect.type == "Date"){
						// return 
					// }else if(co)
				}else{
					return {[collect]: item[collect]}
				}
			}).reduce((prev, curr) => {
				return {...prev, ...curr}
			}, {})
		});

		if(task.reduce){
			let tmp = result.reduce((prev, curr) => {
				let prev_state = prev[curr[task.reduce?.key || '']]
				if(!prev_state) { 
					prev_state = {...curr}
				}else{
					prev_state[task.reduce?.sum || ''] += curr[task.reduce?.sum || '']
				}
				
				return {
					...prev,
					[curr[task.reduce?.key || '']]: {
						...prev_state
					}
				}
			}, {})
			result = Object.keys(tmp).map((key) => tmp[key])
		}
		
		const poll_patch = this.patcher[task.family.cluster].snapshot(result)

		for(var k in poll_patch){
			let item = poll_patch[k]
			if(k.indexOf('_') < 0){
				if(Array.isArray(item) && item.length == 1){
					this.newItem(task, item)
				}else if(typeof(item) == 'object' && !Array.isArray(item)){
					this.updatedItem(task, parseInt(k), item)
				}
			}
		}
		if(!poll_patch) return;
		// this.patcher.fastforward([], poll_patch)
		// for(var k in poll_patch){
		// 	console.log(k, poll_patch[k], typeof(poll_patch[k]), Array.isArray(poll_patch[k]))
		// }
	}

	diff(){

	}

	submit(){

	}
}