import express from 'express'
import routes from './routes';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser'

import { PrismaClient } from '@hexhive/data'

const prisma = new PrismaClient()

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/web-ui/build/')));
app.use('/api', routes(prisma))

app.listen(9999, () => {
    console.log("HexHive Admin on Port 9999")
})