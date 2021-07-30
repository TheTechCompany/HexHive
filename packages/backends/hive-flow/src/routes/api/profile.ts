import { Connector } from '../../connector';
import crypto from 'crypto';
import express from 'express'
const profile = express.Router();


export default (connector: Connector) => {
  /* Staff uploads */
  profile.get('/uploads', async (req, res, next) => {
    let userID = (req as any).user.id;
    const results = await connector.getUploadsByUserID(userID)
    res.send(results);

  });

  /* Password update */
  profile.put('/password', async (req, res, next) => {
    let pass = crypto.createHash('sha256').update(req.body.password).digest('hex'),
      userID = (req as any).user.id;
    await connector.updateUser(userID, { password: pass })

    res.send({ success: true });

  });

  /* Account activation */
  profile.post('/activate', async (req, res, next) => {
    let pass = crypto.createHash('sha256').update(req.body.password).digest('hex'),
      userID = (req as any).user.id;
    const update = await connector.updateUser(userID,
      { password: pass, active: true })

    res.send(update);
  });

  return profile;
}