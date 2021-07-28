import crypto from 'crypto'

let db : any = { // Here is a fast overview of what your db model should look like
  authorizationCode: {
    authorizationCode: '', // A string that contains the code
    expiresAt: new Date(), // A date when the code expires
    redirectUri: '', // A string of where to redirect to with this code
    client: null, // See the client section
    user: null, // Whatever you want... This is where you can be flexible with the protocol
  },
  client: { // Application wanting to authenticate with this server
    clientId: '', // Unique string representing the client
    clientSecret: '', // Secret of the client; Can be null
    grants: [], // Array of grants that the client can use (ie, `authorization_code`)
    redirectUris: [], // Array of urls the client is allowed to redirect to
  },
  token: {
    accessToken: '', // Access token that the server created
    accessTokenExpiresAt: new Date(), // Date the token expires
    refreshToken: '', // NOTE this is only needed if you need refresh tokens down the line
    refreshTokenExpiresAt: new Date(),
    client: null, // Client associated with this token
    user: null, // User associated with this token
  },
}

export interface AuthClient {
    clientId: string;
    clientSecret: string;
    grants: string[];
    redirectUris: string[];
}


export type AuthorizationCode = {
    authorizationCode?: string;
    client?: AuthClient;
    expiresAt: Date;
    redirectUri: string;
    user: any;
}

// export interface AuthAdapter {
//     getClient: (clientId: string, clientSecret: string) => Promise<AuthClient | null>;
//     saveToken: (token: { accessToken: any; accessTokenExpiresAt: any; refreshToken: any; refreshTokenExpiresAt: any }, client: any, user: any) => Promise<{  
//                 accessToken: string,
//                 accessTokenExpiresAt: Date,
//                 refreshToken: string, // NOTE this is only needed if you need refresh tokens down the line
//                 refreshTokenExpiresAt: Date,
//                 client: string,
//                 user: any
//             } | null>;

//     getAccessToken: (token: string) => Promise<string | boolean | null> 
// }

export abstract class AuthAdapter {
    async getClient(clientId: string, clientSecret: string) : Promise<AuthClient | null>{
        return null
    }

    async saveToken(token: { accessToken: string; accessTokenExpiresAt: Date; refreshToken: string; refreshTokenExpiresAt: Date }, client: any, user: any): Promise<{  
        accessToken: string,
        accessTokenExpiresAt: Date,
        refreshToken: string, // NOTE this is only needed if you need refresh tokens down the line
        refreshTokenExpiresAt: Date,
        client: string,
        user: any
    } | void> {

    }

    async getAccessToken(token: string): Promise<string | boolean | void> {

    }

    async getRefreshToken(token: string): Promise<string | void> {

    }

    async revokeToken(token: {accessToken: string}): Promise<boolean | void> {

    }

    async generateAuthorizationCode(client: any, user: any, scope: any): Promise<string | void> {
        const seed = crypto.randomBytes(256)
        const code = crypto
          .createHash('sha1')
          .update(seed)
          .digest('hex')
        return new Promise((resolve) => resolve(code))
    }

    async saveAuthorizationCode(code: { authorizationCode: any; expiresAt: any; redirectUri: any }, client: any, user: any)  : Promise<{ authorizationCode: string, expiresAt: Date, client: any, user: any, redirectUri: string }  | void>{

    }

    async revokeAuthorizationCode(authorizationCode: any) : Promise<boolean | void>{
    }
    
    async getAuthorizationCode(authorizationCode: any) : Promise<AuthorizationCode | void>{
    }

    async verifyScope(token: string, scope: string[]) : Promise<boolean | void> {

    }
}

const DemoAdapter : AuthAdapter = {
  getClient: function (clientId: any, clientSecret: any) {
    // query db for details with client
    log({
      title: 'Get Client',
      parameters: [
        { name: 'clientId', value: clientId },
        { name: 'clientSecret', value: clientSecret },
      ]
    })
    db.client = { // Retrieved from the database
      clientId: clientId,
      clientSecret: clientSecret,
      grants: ['authorization_code', 'refresh_token'],
      redirectUris: ['http://localhost:3030/client/app'],
    }
    return new Promise(resolve => {
      resolve(db.client)
    })
  },
  // generateAccessToken: (client, user, scope) => { // generates access tokens
  //   log({
  //     title: 'Generate Access Token',
  //     parameters: [
  //       {name: 'client', value: client},
  //       {name: 'user', value: user},
  //     ],
  //   })
  //
  // },
  saveToken: (token: { accessToken: any; accessTokenExpiresAt: any; refreshToken: any; refreshTokenExpiresAt: any }, client: any, user: any) => {
    /* This is where you insert the token into the database */
    log({
      title: 'Save Token',
      parameters: [
        { name: 'token', value: token },
        { name: 'client', value: client },
        { name: 'user', value: user },
      ],
    })
    db.token = {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      refreshToken: token.refreshToken, // NOTE this is only needed if you need refresh tokens down the line
      refreshTokenExpiresAt: token.refreshTokenExpiresAt,
      client: client,
      user: user,
    }
    return new Promise(resolve => resolve(db.token))

  },
  getAccessToken: (token: string) => {
    /* This is where you select the token from the database where the code matches */
    log({
      title: 'Get Access Token',
      parameters: [
        { name: 'token', value: token },
      ]
    })
    if (!token || token === 'undefined') return new Promise((resolve) => resolve(false))
    return new Promise(resolve => resolve(db.token))
  },
  getRefreshToken: (token: any) => {
    /* Retrieves the token from the database */
    log({
      title: 'Get Refresh Token',
      parameters: [
        { name: 'token', value: token },
      ],
    })
    
    console.log({ name: 'db.token', value: db.token })
    return new Promise(resolve => resolve(db.token))
  },
  revokeToken: (token: {accessToken: string}) => {
    /* Delete the token from the database */
    log({
      title: 'Revoke Token',
      parameters: [
        { name: 'token', value: token },
      ]
    })
    if (!token || token.accessToken === 'undefined') return new Promise(resolve => resolve(false))
    return new Promise(resolve => resolve(true))
  },
  generateAuthorizationCode: (client: any, user: any, scope: any) => {
    /*
    For generating custom codes
    */

    log({
      title: 'Generate Authorization Code',
      parameters: [
        { name: 'client', value: client },
        { name: 'user', value: user },
      ],
    })

    const seed = crypto.randomBytes(256)
    const code = crypto
      .createHash('sha1')
      .update(seed)
      .digest('hex')
    return new Promise((resolve) => resolve(code))
  },
  saveAuthorizationCode: (code: { authorizationCode: string; expiresAt: any; redirectUri: any }, client: any, user: any) => {
    /* This is where you store the access code data into the database */
    log({
      title: 'Save Authorization Code',
      parameters: [
        { name: 'code', value: code },
        { name: 'client', value: client },
        { name: 'user', value: user },
      ],
    })
    db.authorizationCode = {
      authorizationCode: code.authorizationCode,
      expiresAt: code.expiresAt,
      client: client,
      user: user,
    }
    return new Promise(resolve => resolve(Object.assign({
      redirectUri: `${code.redirectUri}`,
    }, db.authorizationCode)))
  },
  getAuthorizationCode: (authorizationCode: any) => {
    /* this is where we fetch the stored data from the code */
    log({
      title: 'Get Authorization code',
      parameters: [
        { name: 'authorizationCode', value: authorizationCode },
      ],
    })
    return new Promise(resolve => {
      resolve(db.authorizationCode)
    })
  },
  revokeAuthorizationCode: (authorizationCode: any) => {
    /* This is where we delete codes */
    log({
      title: 'Revoke Authorization Code',
      parameters: [
        { name: 'authorizationCode', value: authorizationCode },
      ],
    })
    db.authorizationCode = { // DB Delete in this in memory example :)
      authorizationCode: '', // A string that contains the code
      expiresAt: new Date(), // A date when the code expires
      redirectUri: '', // A string of where to redirect to with this code
      client: null, // See the client section
      user: null, // Whatever you want... This is where you can be flexible with the protocol
    }
    const codeWasFoundAndDeleted = true  // Return true if code found and deleted, false otherwise
    return new Promise(resolve => resolve(codeWasFoundAndDeleted))
  },
  verifyScope: (token: any, scope: any) => {
    /* This is where we check to make sure the client has access to this scope */
    log({
      title: 'Verify Scope',
      parameters: [
        { name: 'token', value: token },
        { name: 'scope', value: scope },
      ],
    })
    const userHasAccess = true  // return true if this user / client combo has access to this resource
    return new Promise(resolve => resolve(userHasAccess))
  }
}

function log({ title, parameters }: any) {
  console.log(title, parameters)
}

export default DemoAdapter