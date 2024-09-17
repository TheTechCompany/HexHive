#!/usr/bin/env node

/* 
    HexHive CLI
*/
import process from 'process';
process.removeAllListeners('warning');

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { builder as createBuilder, handler as createHandler } from './commands/create'

yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir('commands')
//   .command('create', false, createBuilder, createHandler)
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: 'help' })
  .argv;