import neo4j, {Driver} from 'neo4j-driver'

export * from './user'

export const getGraphSession = (driver?: Driver) => {
	return driver?.session()
}

export const getGraphDriver = async (opts?: {
	uri?: string;
	user?: string;
	password?: string;
}) => {
	const driver = neo4j.driver(
		opts?.uri || process.env.NEO4J_URI || "localhost",
		neo4j.auth.basic(opts?.user || process.env.NEO4J_USER || "neo4j", opts?.password || process.env.NEO4J_PASSWORD || "test")
	)
	return driver
}