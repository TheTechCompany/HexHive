

export default class Response {
  headers: any
  status?: number
  body: any
  constructor({
    body = {},
    headers = {},
  }: any) {
    let h : any = {}
    for (const header in headers) {
      if (headers.hasOwnProperty(header)) {
        h[header.toLowerCase()] = headers[header]
      }
    }
    Object.assign(this, {
      headers: h,
      body,
      status: 200,
    })
  }

  get(field: string) {
    return this.headers[field.toLowerCase()]
  }

  redirect(location: any) {
    this.set('Location', location)
    this.status = 302
  }

  set(field: string, value: any) {
    this.headers[field.toLowerCase()] = value
  }
}
