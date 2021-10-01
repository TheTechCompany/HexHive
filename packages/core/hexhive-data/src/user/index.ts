import { nanoid } from "nanoid";
import { Session, Transaction } from "neo4j-driver";
import { createHash } from 'crypto';

export const createUser = async (tx: Transaction, user: {
	name: string, 
	username: string,
	password: string
}, organisation?: string) => {

	const pwdHash = createHash('sha256').update(user.password).digest('hex');

	const result = await tx.run(`
		CREATE (user:HiveUser {id: $id, name: $name, username: $username, password: $pwdHash})
		${organisation ? 'MATCH (org:HiveOrganisation {id: $organisation})\n CREATE (org)-[:TRUSTS]->(user)' : ''}
		RETURN user
	`, {
		id: nanoid(),
		username: user.username,
		name: user.name,
		pwdHash,
		organisation
	})
	return result.records?.[0]?.get(0).properties;
} 

export const getUser = async (tx: Transaction, id: string) => {
	const result = await tx.run(`
		MATCH (user:HiveUser {id: $id})
		RETURN user
	`, {
		id: id
	})

	return result.records?.[0]?.get(0).properties;
}

export const authUser = async (tx:Transaction, username: string, password: string) => {
	let pwdHash = createHash('sha256').update(password).digest('hex');

	const result = await tx.run(`
		MATCH (user:HiveUser {username: $username, password: $pwdHash})
		RETURN user
	`, {
		username,
		pwdHash
	})

	return result.records?.[0]?.get(0).properties
}