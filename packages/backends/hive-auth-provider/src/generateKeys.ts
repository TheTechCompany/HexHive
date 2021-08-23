
import fs from 'fs';
import path from 'path';
import jose from 'jose';

const keystore = new jose.JWKS.KeyStore();

export default (dir: string, file: string) => {
  let keydir = path.join(__dirname, dir)
  let keyfile = path.join(keydir, file)

  if(!fs.existsSync(path.resolve(keydir))){
    fs.mkdirSync(keydir)
  }
  if(fs.existsSync(path.resolve(keyfile))){ 
    return Promise.resolve(true); 
  }

  console.log(keyfile)

  return Promise.all([
    keystore.generate('RSA', 2048, { use: 'sig' }),
    keystore.generate('EC', 'P-256', { use: 'sig', alg: 'ES256' }),
    keystore.generate('OKP', 'Ed25519', { use: 'sig', alg: 'EdDSA' }),
  ]).then(() => {
    fs.writeFileSync(keyfile, JSON.stringify(keystore.toJWKS(true), null, 2));
  });
}