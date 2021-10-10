# HexHive

Mono-repo for hexhive.io

## Get started

```
cd hexhive-common
yarn

npx lerna bootstrap
```

### Web Frontends

```
npx lerna run start --scope @hexhive/root-config

npx lerna run start --scope [@hexhive-coreapps | @hexhive-apps]/$appName
```

### Backends

#### Backend Configuration

Copy `packages/backends/hive-gateway/example-env` to `packages/backends/hive-gateway/.env`

Replace with neo4j and kafka configuration

```
npx lerna run dev --scope @hexhive-backends/gateway

npx lerna run start --scope @hexhive-backends/gateway
```

## Packages

### Core 

- HexHive UI : Component library

### Apps

- Hive-Flow
- Hive-Command

### Backends

- Hive-Flow
- Hive-Command
