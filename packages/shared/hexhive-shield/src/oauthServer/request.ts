import {
  MissingArgumentError,
} from './errors'

import typeis from 'type-is'

export default class Request {
  headers: any
  constructor({
    headers,
    method,
    query,
    body = {},
    ...rest
  }: any) {
    if(!headers) throw new MissingArgumentError('headers')
    if(!method) throw new MissingArgumentError('method')
    if(!query) throw new MissingArgumentError('query')
    let h: any = {}
    for (const header in headers) {
      if (headers.hasOwnProperty(header)) {
        h[header.toLowerCase()] = headers[header]
      }
    }
    Object.assign(this, {
      headers: h,
      method,
      query,
      body,
    })
    for (const key in rest) {
      if (rest.hasOwnProperty(key) && !(this as any)[key]) {
        (this as any)[key] = rest[key]
      }
    }
  }

  get(field: string) {
    return this.headers[field.toLowerCase()]
  }

  is(types: any) {
    const t = Array.isArray(types) ? types : [].slice.call(arguments)
    return typeis(this as any,t)
  }
}