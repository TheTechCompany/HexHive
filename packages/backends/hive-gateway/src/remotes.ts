const isDev = process.env.NODE_ENV != "production"

    
const FLOW_URL = (!isDev ? process.env.FLOW_SERVER : "http://localhost:7003/graphql") || ""
const COMMAND_URL = (!isDev ? process.env.COMMAND_SERVER : "http://localhost:7002/graphql") || ""

const SIGNAGE_URL = (!isDev ? process.env.SIGNAGE_SERVER : "http://localhost:9009/graphql") || ""

export const REMOTE_SCHEMA : string[] = [
	SIGNAGE_URL

]