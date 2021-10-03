import crypto from 'crypto';
import { User } from '@hexhive/types'
import { authUser, getUser } from '@hexhive/data-core'
import { session } from './adapters/neo4j'

export class Account {

    async findAccount(ctx: any, id: string){

        const user = await session?.readTransaction(async (tx) => {
            const result = await tx.run(`
                MATCH (org:HiveOrganisation)-[:TRUSTS]->(user:HiveUser {id: $id})-[:HAS_ROLE]->(role)-[:USES_APP]->(app)
                RETURN user{
                    .*,
                    apps: collect(app{.*}),
                    organisation: org{ .* }
                }
            `, {
                id
            })
            return result.records.map((x) => x.get(0))[0];
        })

        if(!user) return;

        return {
            accountId: user.id,
            async claims(){
                return {
                    sub: user.id,
                    login: user.id,
                    name: user.name,
                    applications: user.apps,
                    organisation: user.organisation?.id,
                    email: user.username,
                    email_verified: user.username
                }
            }
        }
    }

    async authenticate(email: string, password: string){
        const pwd_hash = crypto.createHash('sha256').update(password).digest('hex');

        const user = await session.readTransaction(async (tx) => {
            return await authUser(tx, email, password);
        })
        // await authUser()
        // const user = await User.findOne({username: email, password: pwd_hash})

        return user?.id;
    }
}