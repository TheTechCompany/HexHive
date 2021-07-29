import { AuthAdapter, AuthClient } from "../auth";
import { ClientApp, AccessToken, AuthorizationCode } from "../types";
import AuthorizationCodeModel from "../types/authorization_code";

export class MongooseAdapter extends AuthAdapter {


    async getUser(info: any, info2: any){
        console.log("GET USER", info, info2)
    }

    async getClient(clientId: string, clientSecret: string) {
        let filter : any = {
            clientId
        }

        if(clientSecret != undefined) filter.clientSecret = clientSecret

        console.log("Find CLient", filter)
        return await ClientApp.findOne(filter)
    }

    async saveToken(token: { accessToken: any; accessTokenExpiresAt: any; refreshToken: any; refreshTokenExpiresAt: any; }, client: {_id: string}, user: any): Promise<void | { accessToken: string; accessTokenExpiresAt: Date; refreshToken: string; refreshTokenExpiresAt: Date; client: string; user: any; }> {

        let update = {
            ...token,
            client: client._id,
            user
        }

        console.log("SAVE TOKEN CODE", update)

        await AccessToken.updateOne({ accessToken: token.accessToken }, { $set: update }, { upsert: true })
        return update;
    }

    async getAccessToken(token: string): Promise<string | boolean | void> {
        console.log("GET TOKEN CODE", token)

        return await AccessToken.findOne({accessToken: token}).populate('client').populate('user')
    }

    async getRefreshToken(token: string): Promise<string | void> {
        console.log("GET RTOKEN CODE", token)

        return await AccessToken.findOne({refreshToken: token}).populate('client').populate('user')
    }

    async revokeToken(token: {accessToken: string}): Promise<boolean | void> {
        console.log("REVOKE RTOKEN CODE", token)

        await AccessToken.deleteOne({accessToken: token.accessToken})
        return true;
    }

    async saveAuthorizationCode(code: { authorizationCode: string; expiresAt: any; redirectUri: any; }, client: {_id: string}, user: any): Promise<void | { authorizationCode: string; expiresAt: Date; client: any; user: any; redirectUri: string; }> {
        let update = {
            ...code,
            client: client._id,
            user
        }

        console.log("SAVE AUTH", update)

        await AuthorizationCode.updateOne({authorizationCode: code.authorizationCode}, {$set: update}, {upsert: true})
        return update;
    }

    async revokeAuthorizationCode(authorizationCode: any): Promise<boolean | void> {
        await AuthorizationCode.deleteOne({authorizationCode: authorizationCode.authorizationCode})
        return true;
    }

    async getAuthorizationCode(authorizationCode: any): Promise<any | void> {

        const code = await AuthorizationCode.findOne({authorizationCode}).populate('client').populate('user');
        return code;
    }

    async verifyScope(token: string, scope: string[]): Promise<boolean | void> {
        //TODO check scope and token for validity

        console.log("Verify", token, scope)
        return true;
    }

}