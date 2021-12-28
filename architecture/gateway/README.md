# HexHive Gateway

## Microfrontend server

- Serves route with remoteEntry from store

## File System

- Connects to IPFS store

## Remote Schemas

- Loads remote schema endpoints from pluggable store
- Reloads schema in flight

```
{
	appName {
		query
		mutation
	}

	appName2{
		query
		mutation
	}
}

```