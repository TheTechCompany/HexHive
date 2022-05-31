/*
	Polls MSSQL Server and replicates through Kafka to the authorized graph

*/
import { EventEmitter } from 'events'
import mssql from 'mssql';
import { WorkerTask } from './task';
import Patch from '@hexhive/patch'
import { dateReviver } from 'jsondiffpatch'
export * from './task'

export class MSSQLWorker extends EventEmitter {

	private pool?: mssql.ConnectionPool;
	private config : mssql.config;

	private task: WorkerTask[];

	private patcher: {[key: string]: Patch} = {}

	constructor(config: mssql.config, task: WorkerTask[], initialState?: {[key: string]: any[]}){
		super();

		this.config = config;
		this.task = task;


		this.task.forEach((task) => {
			this.patcher[task.family.cluster] = new Patch({key: task.family.species, id: `${task.family.cluster}-${task.family.species}`})
			if(initialState?.[task.family.cluster]){
				this.patcher[task.family.cluster].snapshot(initialState[task.family.cluster])
			}
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
		console.log({pool: this.pool})
		// await this.discover();
		
		this.task.forEach((task) => {
			this.poll(task);

			setInterval(this.poll.bind(this, task), 60 * 1000)
		})

		// this.poll(task);


		// await Promise.all(this.task.map(async (task) => {
		// 	await this.poll(task)
		// }))
	}

	getQuery(task: WorkerTask){
		let sql = 'SELECT ';

		let keys = [...new Set(task.collect.reduce<any[]>((prev, curr) => {
			return prev.concat(curr.keys ? curr.keys : [`${curr.key} as ${curr.to}`])
		}, []))]
		sql += task.collect && task.collect.length > 0 ? keys.join(', ') : '*'
		sql += ' FROM ' + task.family.cluster

		if(task.join?.inner){
			sql += ` INNER JOIN ${task.join.inner.join} ON ${task.join.inner.on}`
		}

		if(task.group){
			sql += ` GROUP BY ${task.group.join(', ')}`
		}

		// console.log(sql)
		return sql;
	}

	newItem(task: WorkerTask, value: any){
		this.emit(`NEW`, {value: JSON.parse(JSON.stringify(value), dateReviver), id: task.family.cluster})
	}

	updatedItem(task: WorkerTask, ix: number, value: any){
		this.emit(`UPDATE`, {
			valueId: this.patcher[task.family.cluster].find(ix)[task.collect.find((a) => a.to == task.family.species)?.to || ''], 
			value, 
			id: task.family.cluster
		})
	}

	removedItem(){

	}

	
	async poll(task: WorkerTask){
		let q = this.getQuery(task)

		// const res = await mssql.query(q);
		// console.log({res});

		const result_q = await this.pool?.query(q)
		// console.log({result_q: result_q?.recordset})
		// console.log("FIND", result_q)
		let result: any[] = (result_q?.recordset || []).map((item) => {
			return task.collect.map((collect) => {
				if(typeof(collect) == "object"){
					switch(collect.type){
						case 'Date':
							return {[collect.to]: item[collect.to] /*new Date(item[collect.key])*/}
						case 'Function':
							let script = `
							function textToDurationType(duration){
								switch(duration){
									case 'Weeks':
										return 7;
									case 'Man Days':
										return 1;
									case 'Months':
										return 28;
								}
							}
							${collect.keys?.map((key) => `let ${key} = "${item[key].toString()}";`).join(`\n`)}	
							function math(){
							${collect.math}
							}
							math()`
							// console.log(eval(script))
							// console.log(collect.to, eval(script))
							return {[collect.to]: eval(script)}
							break;
						default:
							return {[collect.to]: item[collect.to]}
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
					prev_state[task.reduce?.to || ''] += curr[task.reduce?.sum || '']
				}

				// console.log(prev_state, task.reduce)
				
				return {
					...prev,
					[`${curr[task.reduce?.key || '']}`]: {
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
				}else{
					console.log(item)
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