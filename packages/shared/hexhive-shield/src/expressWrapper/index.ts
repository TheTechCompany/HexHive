import {
  Server as  OAuth,
  Request,
  Response,
  Errors
} from '../oauthServer'
import { UnauthorizedRequestError } from '../oauthServer/errors'
import { pick } from 'lodash'

export default class ExpressWrapper {
  server: OAuth
  useErrorHandler: any
  continueMiddleware: any
  constructor({
    oauthOptions,
    useErrorHandler = false,
    continueMiddleware = false,
  }: any) {
    this.server = new OAuth(oauthOptions)
    this.useErrorHandler = useErrorHandler
    this.continueMiddleware = continueMiddleware
  }

  handleErrorResponse(e: any, res: any, next: any, response: Response) {
    console.log("Error" ,e)
    if (this.useErrorHandler) return next(e)
    if (response) res.set(response.headers)
    return res
      .status(e.code)
      .send(e instanceof UnauthorizedRequestError ? null : {
        error: e.name,
        error_description: e.message,
      })
  }

  handleResponse(res: { set: (arg0: any) => void; redirect: (arg0: any) => any; status: (arg0: any) => { (): any; new(): any; send: { (arg0: any): any; new(): any } } }, response: any) {
    if(response.status === 302) {
      const l = response.headers.location
      delete response.headers.location
      res.set(response.headers)
      return res.redirect(l)
    }
    res.set(response.headers)
    return res.status(response.status).send(response.body)
  }

  authenticate(options?: any) {
    return async (req: any,res: any,next: () => any) => {
      const request = new Request(req)
      const response = new Response(res)
      let token
      try {
        token = await this.server.authenticate(request, response, options)
      } catch(e) {
        return this.handleErrorResponse(e, res, next, response)
      }
      res.locals.oauth = {token}
      
      req.user = pick(token.user, [
        "_id",
        "username",
        "organisation"
      ]);

      return next()
    }
  }

  authorize(options?: any) {
    return async (req: any,res: any,next: () => any) => {
      const request = new Request(req)
      const response = new Response(res)
      let code
      try {
        code = await this.server.authorize(request, response, options)
      } catch(e) {
        return this.handleErrorResponse(e,res,next,response)
      }
      res.locals.oauth = { code }
      if (this.continueMiddleware) return next()
      return this.handleResponse(res, response)
    }
  }

  token(options: any) {
    return async (req: any,res: any,next: () => any) => {
      const request = new Request(req)
      const response = new Response(res)
      let token
      try {
        token = await this.server.token(request, response, options)
      } catch(e) {
        return this.handleErrorResponse(e,res,next,response)
      }
      res.locals.oauth = { token }
      if (this.continueMiddleware) return next()
      return this.handleResponse(res, response)
    }
  }
}
