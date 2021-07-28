import axios, { AxiosInstance } from 'axios';

export interface AuthClientOpts{
    clientId: string;
    clientSecret: string;
    authorizationServer: string;
    redirectUri: string;
}

export class AuthClient {

    private instance: AxiosInstance;

    private clientId: string;
    private clientSecret: string;

    private authorizationServer: string;

    private redirectUri: string;

    constructor(opts: AuthClientOpts){
        this.clientId = opts.clientId;
        this.clientSecret = opts.clientSecret
        this.authorizationServer = opts.authorizationServer
        this.redirectUri = opts.redirectUri
        
        this.instance = axios.create({
            baseURL: this.authorizationServer,
            timeout: 1000,
            headers: {},
            maxRedirects: 0
          });

        console.log("Set up auth client")

        // this.oauthClient = new ClientOAuth2({
        //     clientId: this.clientId,
        //     authorizationUri: this.authorizationUri,
        //     redirectUri: this.redirectUri,
        //     scopes: []
        // })
    }



    async getToken(accessToken: string){
        let fd = new URLSearchParams();
        fd.append('client_id', this.clientId);

        fd.append('client_secret', this.clientSecret)
        fd.append('grant_type',  'authorization_code')
        fd.append('response_type', 'code')
        fd.append('code', accessToken)

        const result = await this.instance.post(`/oauth/token`, fd, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        return result.data;
    }

    async getAuthorizationCode(username: string, password: string){
        let result;
        try{
            result = await this.instance.post(`/oauth/authorize`, {
                client_id: this.clientId,
                grant_type: 'authorization_code',
                redirect_uri: this.redirectUri,
                response_type: "code",
                
                    username,
                    password
                
            })
            result = result.data
        }catch(e){
            console.log(e)
            result = e.response;
        }

        return result
    }


}