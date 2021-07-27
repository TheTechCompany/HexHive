import { CentralAuthServer } from "../src";
import DemoAdapter from "../src/model";

const authServer = new CentralAuthServer({
    secret: 'JWT SECRET',
    issuer: 'https://api.hexhive.io',
    adapter: DemoAdapter
}, {
    findUser: async (auth_blob: any) => {
        return ['ross', {id: '123'}]
    }
})

console.log(authServer.signToken('abccs', {name: "ID"}))

authServer.startServer(8090)