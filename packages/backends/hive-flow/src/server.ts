import dotenv from 'dotenv';
const env = dotenv.config()

import express from 'express'

import bodyParser from 'body-parser'
import cors from 'cors';
import jwt from 'jsonwebtoken'
import path from 'path';
// import { Client } from 'minio'
import crypto from 'crypto'

import { Connector } from './connector'

import { graphqlHTTP } from 'express-graphql'; // ES6

import { schema as graphDefaults } from './defaults'
import config from './conf'

import Routes from './routes'


import { AuthServer } from '@hexhive/auth'
import { connect_data } from '@hexhive/auth/dist/types'


const BASE_URL = process.env.BASE_URL || 'https://workhub.services'

const app = express()

const SERVER_PORT = process.env.NODE_ENV == 'production' ? 80 : 8081;

/* Instantiate a Minio client, its dependency the connector and the
 * connector's dependency, the router
 */

let minioClient: any = {
  makeBucket: () => { }
}

// if(config.minio && config.minio.endPoint){
//   let minio : any = {
//     ...config.minio
//   }
//   minioClient = new Client(minio)
// }

const c = new Connector(config.db,
  {
    sign: jwt.sign,
    secret: config.jwt_secret
  },
  BASE_URL)

const routes = Routes(c, AuthServer);




/* Callbacks and auxiliary functions */
function connector_callback() {
  console.log('Connected to SQL and MongoDB');
}

function makeBucket_callback(err: any) {
  if (err) return console.log(err);
  console.log("Bucket created succesfully");
}

function start_app() {
  // if(process.env.NODE_ENV == 'production'){
  //   greenlock.init({
  //     packageRoot: path.join(__dirname, '/../../../'), 
  //     maintainerEmail: 'professional.balbatross@gmail.com',
  //     configDir: "./greenlock.d",
  //     cluster: false
  //   }).serve(app)
  // }else{
  connect_data();
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`) 
  })
  // }
}

/* Will be called at end of file */
function init() {
  //minioClient.makeBucket('pencilin', 'us-east-1', makeBucket_callback);
  start_app();
}

/* Configuration */
c.on('ready', connector_callback);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccountKey),
//   databaseURL: "https://pencil-in-nz.firebaseio.com"
// })

const whitelist = [process.env.BASE_URL, "https://flow-staging.hexhive.io", "https://flow.hexhive.io", "https://hexhive.io", "http://localhost:3000","http://localhost:3002", "http://localhost:8081", "https://view.officeapps.live.com"]

app.set('trust proxy', 1)


app.use(cors({
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, credentials: true
}));

app.use(bodyParser.json());

// AuthServer.oauthServer.authenticate(),
if(process.env.NODE_ENV == 'dev-auth' || process.env.NODE_ENV == 'production'){
  app.use('/graphql', AuthServer.oauthServer.authenticate())
  app.use('/api/files', AuthServer.oauthServer.authenticate())
}

app.use('/graphql',
  //AuthServer.oauthServer.authenticate(),
  graphqlHTTP({
    schema: graphDefaults(c),
    rootValue: {
      Query: {

      }
    },
    graphiql: true 
  })
)

app.use(routes);



init();


// app.use('/', express.static(__dirname + '/../ui'));

// app.use('/dashboard*', (req, res, next) => {
//   let session : any = req.session
//   if(session.user){
//     jwt.verify(session.user, config.jwt_secret, (err : any, decoded: any) => {

//       if(!err && decoded){

//         var current_time = new Date().getTime() / 1000;
//         if(current_time > decoded.exp){
//           res.redirect('/login?tokenExpired');
//         }else{
//           next();
//         }
//       }else{
//         res.redirect('/login?wrongAuth');
//       }
//     });
//   }else{
//     res.redirect('/login?loggedOut');
//   }
// });


// app.use('/api/*', function (req, res, next) {
//   let token = req.query.access_token;
//   if (token)
//     req.headers.authorization = 'Bearer ' + token;
//   next();
// });

//

// app.use('/api/*', jwt_middleware({algorithms: ["HS256"], secret : config.jwt_secret}));

/*******************************************************************************
 *
 * Routes
 *
 *******************************************************************************/

// app.all(['/', '/login*', '/dashboard*', '/admin*', '/invite*', '/forgot*', '/reset',], (req, res) => {
//   res.sendFile(path.resolve(__dirname + '/../ui/index.html'));
// });

// /  var pass_hash = crypto.createHash('sha256').update(req.body.password).digest('hex');


