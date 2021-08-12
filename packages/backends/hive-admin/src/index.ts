
import dotenv from 'dotenv';
const env = dotenv.config()
import { graphqlHTTP } from 'express-graphql'; // ES6

import express from 'express'

import bodyParser from 'body-parser'
import cors from 'cors';

import { connect_data } from '@hexhive/types'

import graphSchema from './graphql'


const main = async () => {
    await connect_data();

    const app = express()

    app.use(bodyParser.json())
    app.use(cors())


    app.use('/graphql', graphqlHTTP({
        schema: graphSchema,
        graphiql: true
    }))

    app.listen(7070, () => {
        console.log("Up on 7070")   
    })
    
}

main()
