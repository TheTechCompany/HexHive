import express from 'express';
// import api from './api';
import { Connector } from '../connector'
import { CentralAuthServer } from '@hexhive/auth'

export type AppRequest = express.Request & {connector: Connector}

/**
  * Routes module parameterised by Connector instance.
 **/
export default function (connector: any, authServer: CentralAuthServer) {
  const router = express.Router();

  /* Analytics middleware */
  // router.use('/api/*', function (req, res, next) {
  //   let _user = (req as any).user;

  //   let body = req.body,
  //       date = new Date(),
  //       formatVersion = {major: 1, minor: 0},
  //       client = req.ip,
  //       method = req.method,
  //       path = req.originalUrl.replace(/\?.*$/, ''),
  //       query = req.query,
  //       timestamp = date.getTime(),
  //       user = _user.id;
  //   let record = {
  //     format : formatVersion,
  //     timestamp,
  //     user,
  //     client,
  //     method,
  //     path,
  //     query,
  //     body
  //   };
  //   connector.addAnalyticsRecord(record, (err: any) => null);
  //   next();
  // });

  // router.use('/api', api(connector, authServer));

  return router;
};
