import { Router } from 'express'
import { HiveMQ } from '@hexhive/mq'
import { Session } from 'neo4j-driver'
const apiKeyAuth = require('api-key-auth');


export default (neo: Session) => {
    const router = Router();

    const mq = new HiveMQ({
        clientId: 'hive-gateway',
        brokers: [process.env.KAFKA_URL || '']
    })

    const getSecret = async (keyId: string, done: (err: Error | null, secret?: string, result?: any) => void) => {
      const result = await neo.readTransaction(async (tx) => {
        return await tx.run(`
          MATCH (key:APIKey {key: $key})
          RETURN key
        `, {
          key: keyId
        })
      })

      const key = result.records?.[0]?.get(0)?.properties
      if (!key) {
        return done(new Error('Unknown api key'));
      }
      const clientApp = key;
      done(null, clientApp.secret, {
        id: clientApp.id,
        name: clientApp.name
      });
    }
    

    mq.connect().then(() => {
        console.log("Broker is live")

        router.use(apiKeyAuth({ getSecret }));

        //Routes
        router.route('/:TOPIC')
        .post(async (req, res) => {
            let message = {
              appliance: (req as any).credentials.id,
              routingKey: req.params.TOPIC, 
              queuedAt: Date.now(),
              data: req.body
            };
//req.params.TOPIC
            //Simple Programming Interface Near Edge
            const result = await mq.emitEvent('SPINE', message)
            res.send({result, message})
        })


    })

 

    return router
}