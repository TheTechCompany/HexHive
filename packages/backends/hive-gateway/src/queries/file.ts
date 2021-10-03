import { nanoid } from "nanoid";
import { Transaction } from "neo4j-driver";

export const createFile = async (tx: Transaction, filesystem: string, file: { name: string, mimetype: string, size: number, cid: string }, cwd?: string) => {
	let query = ""
	query += cwd ? "MATCH (org:HiveOrganisation {id: $fs})-[*1..]->(parent:HiveFile {id: $cwd})" : "MATCH (org:HiveOrganisation {id: $fs})-[:HAS_FS]->(fs:FileSystem)"
	query += `
        CREATE (file:HiveFile {id: $id, name: $name, mimetype: $mimetype, cid: $cid, size: $size })
        CREATE (${cwd ? "parent" : "fs"})-[rel:${!cwd ? "HAS_FILE" : "CONTAINS"}]->(file)
        RETURN file`

	const id = nanoid();
	const result = await tx.run(query, {
		fs: filesystem,
		name: file.name,
		mimetype: file.mimetype,
		size: file.size,
		cid: file.cid,
		id: id,
		cwd: cwd
	})

	return result.records?.[0]?.get(0)
}