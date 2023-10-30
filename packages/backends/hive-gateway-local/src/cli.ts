#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
//   .command('hex-dev', 'Serve HexHive in development mode')
  .commandDir('commands')
//   .command('create', false, createBuilder, createHandler)
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: 'help' })
  .argv;