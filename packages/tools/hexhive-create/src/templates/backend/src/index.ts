/* 
    <%= projectName %> backend
    Scaffolded with @hexhive/cli
*/

import express from 'express'

import bodyParser from 'body-parser';

import { graphqlHTTP } from 'express-graphql'; // ES6

import BaseSchema from './schema'

const app = express();

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
    schema: BaseSchema()
}))

app.listen(9000, () => {
    console.log("Listening on 9000")   
})