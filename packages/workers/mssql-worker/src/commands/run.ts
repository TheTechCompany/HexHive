import { Arguments, CommandBuilder, string } from 'yargs';
import { readFileSync } from 'fs';
import { MSSQLWorker } from '..';

type Options = {
	path: string;
};
  
  export const command: string = 'run';
  export const desc: string = 'Run worker';
  
  export const builder: CommandBuilder<Options, Options> = (yargs) =>
	yargs
	  .options({
		server: {type: 'string'},
		path: {type: 'string', description: "Key store location", default: '/tmp/'}
	  })

  export const handler =  (argv: Arguments<Options>) => {
	const { path, server } = argv;

	if(!server && !process.env.SQL_SERVER) throw new Error("no sql server provided");

	const task = JSON.parse(readFileSync(path, 'utf8'))

	const worker = new MSSQLWorker({
		server: process.env.SQL_SERVER || `${server}`,
		user: process.env.SQL_USER,
		password: process.env.SQL_PASSWORD,
		database: process.env.SQL_DB,
		options: {
			trustServerCertificate: process.env.SQL_TRUST_CERT ? true : false
		}
	}, task)

	worker.start().then(() => {
		

	})


  };