import {Provider} from 'oidc-provider';
import { connect_data } from '@hexhive/types'
import { Account } from './Account';
import express from 'express'
import bodyParser from 'body-parser';
import Router from './router'

connect_data().then(() => {

    const oidc = new Provider(`http://localhost`, {
        clients: [
            {
            client_id: 'foo',
            client_secret: 'bar',
            redirect_uris: ['https://jwt.io'], // using jwt.io as redirect_uri to show the ID Token contents
            response_types: ['id_token'],
            grant_types: ['implicit'],
            token_endpoint_auth_method: 'none',
            },
        ],
        findAccount: Account.findAccount,
        claims: {
            openid: ['sub'],
            email: ['email', 'email_verified'],
        },
        interactions: {
            url(ctx, interaction) {
              return `/interaction/${interaction.uid}`;
            },
        },
        features: {
            // disable the packaged interactions
            devInteractions: { enabled: false },
        },
        cookies: {
            keys: ['testkey'],
        },
    });


    // Heroku has a proxy in front that terminates ssl, you should trust the proxy.
    oidc.proxy = true;

    const router = Router(oidc);

    // router.use(oidc.callback())

    router.listen(process.env.PORT)
    // listen on the heroku generated port
    // oidc.listen(process.env.PORT);

})