import { HiveDB } from ".."
import assert from 'assert'
//Evaluates a drivers ability to authenticate and restrict access to resources
export const meetsRequirements = async (db: HiveDB) => {
    await canAuthenticate(db)
}

export const canAuthenticate = async (db: HiveDB) => {
    const user = await db.createUser({id: 'user', name: 'User', password: '' })

    const authenticatedUser = await db.authenticateUser('user@email.com', '')

    assert(user.id == authenticatedUser.id)
}