
import fs from 'fs';
import path from 'path';
import jose from 'jose';

const keystore = new jose.JWKS.KeyStore();

Promise.all([
  keystore.generate('RSA', 2048, { use: 'sig' }),
  keystore.generate('EC', 'P-256', { use: 'sig', alg: 'ES256' }),
  keystore.generate('OKP', 'Ed25519', { use: 'sig', alg: 'EdDSA' }),
]).then(() => {
  fs.writeFileSync(path.resolve('./jwks.json'), JSON.stringify(keystore.toJWKS(true), null, 2));
});