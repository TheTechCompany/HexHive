import { Arguments, CommandBuilder, string } from 'yargs';
import { readFileSync } from 'fs';


/*
	Polls MSSQL Server and replicates through Kafka to the authorized graph

*/
import { EventEmitter } from 'events'
import mssql from 'mssql';

export class MSSQLWorker extends EventEmitter {

	private pool?: mssql.ConnectionPool;
	private config : mssql.config;



	constructor(config: mssql.config){
		super();

		this.config = config;

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
		// this.task.forEach((task) => {
		// 	setInterval(this.poll.bind(this, task), 10000)
		// })
	}

	async getEstimates(){
		let query = `SELECT 
		vwosQuotes.osqhQuoteID as id, 
		osqhtOther11 as name, 
		osqhStatus as status, 
		osqhCustName as customer, 
		convert(datetime, osqhDate) as date,
		SUM(dbo.vwosQuoteData.osqlLinePrice) AS price
	FROM dbo.vwosQuotes
	INNER JOIN dbo.vwosQuoteData ON dbo.vwosQuoteData.OurRef = vwosQuotes.osqhQuoteID
	GROUP BY vwosQuotes.osqhQuoteID, osqhCustName, osqhStatus, osqhtOther11, osqhDate`;

		const estimates = await mssql.query(query)
		return estimates.recordset
	}
}

type Options = {
	path: string;
};
  
  export const command: string = 'migrate';
  export const desc: string = 'Run migrater';
  
  export const builder: CommandBuilder<Options, Options> = (yargs) =>
	yargs
	  .options({
		server: {type: 'string'},
		path: {type: 'string', description: "Key store location", default: '/tmp/'}
	  })

  export const handler =  (argv: Arguments<Options>) => {
	const { path, server } = argv;

	if(!server && !process.env.SQL_SERVER) throw new Error("no sql server provided");

	const worker = new MSSQLWorker({
		server: process.env.SQL_SERVER || `${server}`,
		user: process.env.SQL_USER,
		password: process.env.SQL_PASSWORD,
		database: process.env.SQL_DB,
		options: {
			trustServerCertificate: process.env.SQL_TRUST_CERT ? true : false
		}
	})

	worker.start().then(async () => {
		
		const e = await worker.getEstimates()
		console.log(e)
	})


  };