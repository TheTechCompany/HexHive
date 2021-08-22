import crypto from 'crypto';
import { User } from '@hexhive/types'

export class Account {
    static async findAccount(ctx: any, id: string){
        console.log(ctx, id)
        const user = await User.findById(id).populate('organisation');

        if(!user) return;

        return {
            accountId: user.id,
            async claims(){
                return {
                    sub: user.id,
                    login: user.id,
                    name: user.name,
                    userinfo:{
                        login: user.id,
                        email: user.username,
                        name: user.name,
                    },
                    email: user.username,
                    email_verified: user.username
                }
            }
        }
    }

    static async authenticate(email: string, password: string){
        const pwd_hash = crypto.createHash('sha256').update(password).digest('hex');
        console.log(email, pwd_hash)
        const user = await User.findOne({username: email, password: pwd_hash})

        return user.id;
    }
}