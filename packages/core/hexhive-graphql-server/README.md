# HexHive GraphQL Server

This is a special wrapper library around a basic GraphQL server that enables stitching multiple endpoints into a single graph by the [Gateway](../../backends/hive-gateway/)

## Usage
```
import { HiveGraph } from '@hexhive/graphql-server';

const graphServer = new HiveGraph({
	dev: false, //True disables auth for setting up gqty like libraries on just the schema without messing around with auth tokens
	rootServer: 'https://staging-api.hexhive.io',
	typeDefs: gql`

	`,
	resolvers: {
		
	}
});
```

## Library roles

- Ensure communications with the gateway use the correct jwks info
- Try registration plugins on gateways
- Pass authentication info to the module server implemenetation 