
let dbConfig : any = {
   mongo: process.env.MONGO_USER ? `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/${process.env.MONGO_DB}` : process.env.MONGO_URL || 'mongodb://localhost/scheduler',
   mongo_options: {
      authSource: process.env.MONGO_AUTH_DB
   }
};

if(process.env.SQL_DB){
   dbConfig['sql'] = {
      user: process.env.SQL_USER,
      password: process.env.SQL_PASS,
      server: process.env.SQL_SERVER,// || '',
      database: process.env.SQL_DB,
      options: {
         trustServerCertificate: true
      }
   }
}

if(process.env.IPFS){
   dbConfig['ipfs'] = process.env.IPFS
}

const minioConfig = {
    endPoint: process.env.MINIO_HOST,
    port: 9000,
    secure: false,
    accessKey : process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
};

export default {
   db: dbConfig,
   minio: minioConfig,
   secret : process.env.SECRET || 'secret',
   jwt_secret : process.env.JWT_SECRET || 'jwt_secret'
}
