import crypto from 'crypto';
import { User } from '@hexhive/types'
import { authUser, getUser } from '@hexhive/data-core'
import { Session } from 'neo4j-driver';

export class Account {

    session: Session;

    constructor(session: Session){
        this.session = session;
    }

    async findAccount(ctx: any, id: string){
        console.log(ctx, id)

        const user = await this.session?.readTransaction(async (tx) => {
            return await getUser(tx, id)
        })

        if(!user) return;

        return {
            accountId: user.id,
            async claims(){
                return {
                    sub: user.id,
                    login: user.id,
                    name: user.name,
                    organisation: user.organisation?.id,
                    email: user.username,
                    email_verified: user.username
                }
            }
        }
    }

    async authenticate(email: string, password: string){
        const pwd_hash = crypto.createHash('sha256').update(password).digest('hex');
        console.log(email, pwd_hash)

        const user = await this.session.readTransaction(async (tx) => {
            return await authUser(tx, email, password);
        })
        // await authUser()
        // const user = await User.findOne({username: email, password: pwd_hash})

        return user?.id;
    }
}