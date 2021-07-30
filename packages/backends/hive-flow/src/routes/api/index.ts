import express from 'express'

import { Connector } from '../../connector'

/* Individual subroutes */
import jobs from './jobs'
import planner from './planner';
import plant from './plant'
import profile from './profile';
import quotes from './quotes'
import schedule from './schedule'
import staff from './staff'
import files from './files'

import { CentralAuthServer } from '@hexhive/auth'


/**
  * API router parameterised by Connector instance
**/
export default function (connector: Connector, authServer: CentralAuthServer) {
  const router = express.Router();

  /* Connector is passed to subroutes as a request parameter */
  router.all('*', (req, res, next) => {
    (req as any).connector = connector;
    next();
  });

  router.use('/jobs', jobs(connector));
  router.use('/planner', planner(connector));
  router.use('/plant', plant(connector));
  router.use('/profile', profile(connector));
  router.use('/quotes', quotes(connector));
  router.use('/schedule', schedule(connector));
  router.use('/staff', staff(connector));

  router.use('/files', files(connector))

  return router;
};
