/* eslint-disable max-classes-per-file */

// npm i mongodb@^3.0.0
import { Db, MongoClient } from 'mongodb'; // eslint-disable-line import/no-unresolved
import snakeCase from 'lodash/snakeCase';
import { Mongoose,Types, Model, model, Schema, connect } from 'mongoose';
import { reject } from 'lodash';

let DB: Db;

const grantable = new Set([
  'access_token',
  'authorization_code',
  'refresh_token',
  'device_code',
  'backchannel_authentication_request',
]);



// class CollectionSet extends Set {
//   constructor(){
//     super([])
//   }

//   add(name: any) {
//     const nu = this.has(name);
//     super.add(name);
//     if (!nu) {
//       DB.collection(name).createIndexes([
//         ...(grantable.has(name)
//           ? [{
//             key: { 'payload.grantId': 1 },
//           }] : []),
//         ...(name === 'device_code'
//           ? [{
//             key: { 'payload.userCode': 1 },
//             unique: true,
//           }] : []),
//         ...(name === 'session'
//           ? [{
//             key: { 'payload.uid': 1 },
//             unique: true,
//           }] : []),
//         {
//           key: { expiresAt: 1 },
//           expireAfterSeconds: 0,
//         },
//       ]).catch(console.error); // eslint-disable-line no-console
//     }
//     return this;
//   }
// }

// const collections = new CollectionSet();

export class MongoAdapter {

  private model: Model<any>;
  name: string;
  
  constructor(name: string) {
    this.name = snakeCase(name);

    console.log(name)

    this.model = model(this.name, new Schema({
      _id: String,
      payload: {type: Schema.Types.Mixed },
      expiresAt: Date
    }))

    // this.model.createIndexes([
    //     ...(grantable.has(name)
    //     ? [{
    //       key: { 'payload.grantId': 1 },
    //     }] : []),
    //   ...(name === 'device_code'
    //     ? [{
    //       key: { 'payload.userCode': 1 },
    //       unique: true,
    //     }] : []),
    //   ...(name === 'session'
    //     ? [{
    //       key: { 'payload.uid': 1 },
    //       unique: true,
    //     }] : []),
    //   {
    //     key: { expiresAt: 1 },
    //     expireAfterSeconds: 0,
    //   }
    // ])

    // NOTE: you should never be creating indexes at runtime in production, the following is in
    //   place just for demonstration purposes of the indexes required
  
    // collections.add(this.name);
  }

  // NOTE: the payload for Session model may contain client_id as keys, make sure you do not use
  //   dots (".") in your client_id value charset.
  async upsert(_id: string, payload: any, expiresIn: number) {
    console.log(_id, payload, expiresIn)
    let expiresAt;

    if (expiresIn) {
      expiresAt = new Date(Date.now() + (expiresIn * 1000));
    }

    try{
      const result = await this.model.updateOne({_id}, {$set: {payload,  ...(expiresAt ? { expiresAt } : undefined) } }, {upsert: true})
      console.log(result)
    }catch(e){
      console.error(e)
    }
  }

  async find(_id: string) {
    console.log(_id)
    const result = await this.model.findOne(
      { _id },
      // { payload: 1 },
    )

    if (!result) return undefined;
    return result.payload;
  }

  async findByUserCode(userCode: string) {
    console.log(userCode)
    const result = await this.model.findOne(
      { 'payload.userCode': userCode }
    )

    if (!result) return undefined;
    return result.payload;
  }

  async findByUid(uid: string) {
    console.log(uid)
    const result = await this.model.findOne(
      { 'payload.uid': uid },
      // { payload: 1 },
    )

    if (!result) return undefined;
    return result.payload;
  }

  async destroy(_id: string) {
    await this.model.deleteOne({ _id });
  }

  async revokeByGrantId(grantId: any) {
    await this.model.deleteMany({ 'payload.grantId': grantId });
  }

  async consume(_id: string) {
    await this.model.findOneAndUpdate(
      { _id },
      { $set: { 'payload.consumed': Math.floor(Date.now() / 1000) } },
    );
  }

 

  // This is not part of the required or supported API, all initialization should happen before
  // you pass the adapter to `new Provider`
  static async connect(uri: string, dbName: string) {
    return new Promise((resolve, reject) => {
    let opts : any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
  }
  
  if(process.env.MONGO_USER){
      opts.user = process.env.MONGO_USER
  }
  
  if(process.env.MONGO_PASS){
      opts.pass = process.env.MONGO_PASS
  }
  
  if(process.env.MONGO_AUTH_DB){
      opts.authSource = process.env.MONGO_AUTH_DB
  }
  
  console.log(`mongodb://${process.env.MONGO_URL || "localhost:27017"}/${process.env.MONGO_DB || "sudbuster-test"}`)
  
      connect(
          `mongodb://${process.env.MONGO_URL || "localhost:27017"}/${process.env.MONGO_DB || "sudbuster-test"}`, 
          opts, (err) => {
              if(err) return reject(err);
              resolve(true);
        });
    })
    
  }
}

