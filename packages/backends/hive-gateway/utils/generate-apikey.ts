import { config } from 'dotenv';
import {nanoid} from 'nanoid';

config();
import jwt from 'jsonwebtoken'

const payload = {
    key: nanoid()
};

const token = jwt.sign(payload, process.env.JWT_SECRET || 'test');

console.log({token, key: payload.key})