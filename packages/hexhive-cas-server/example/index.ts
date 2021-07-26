import Express from 'express'
import { CentralAuthServer } from "../src";

const app = Express();

const authServer = new CentralAuthServer({
    secret: 'JWT SECRET',
    issuer: 'https://api.hexhive.io'
}, {
    findUser: async (auth_blob: any) => {
        return ['ross', {id: '123'}]
    }
})

app.use(authServer.getRoutes())

console.log(authServer.signToken('abccs', {name: "ID"}))

app.listen(8090)