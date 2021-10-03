
let dbConfig : any = {
    mongo: process.env.MONGO_USER ? `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/${process.env.MONGO_DB}` : process.env.MONGO_URL || 'mongodb://localhost/scheduler',
    mongo_options: {
       authSource: process.env.MONGO_AUTH_DB
    }
 };
 

 
 if(process.env.IPFS){
    dbConfig['ipfs'] = process.env.IPFS
 }

 export default {
    db: dbConfig,
    secret : process.env.SECRET || 'secret',
    jwt_secret : process.env.JWT_SECRET || 'jwt_secret'
 }
 