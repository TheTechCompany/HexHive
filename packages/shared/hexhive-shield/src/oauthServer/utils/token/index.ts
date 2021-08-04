import crypto from 'crypto'
const randomBytes = crypto.randomBytes

export const generateRandomToken =() => {
  return new Promise((res,rej) => {
    randomBytes(256, (err, buf) => {
      if(err) return rej(err)
      return res(
        crypto
          .createHash('sha1')
          .update(buf)
          .digest('hex')
      )
    })
  })
}
