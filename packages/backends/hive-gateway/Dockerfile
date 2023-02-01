FROM node:16-slim as build

ARG BUILD_ENV=github

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY . . 

RUN npm install

RUN npx lerna bootstrap --scope @hexhive/gateway --include-dependencies

ENV NODE_ENV="production"

RUN npx lerna run build --scope @hexhive/gateway --include-dependencies

WORKDIR /app/packages/backends/hive-gateway

RUN cp -Lr /app/packages/backends/hive-gateway/node_modules/ _node_modules/

FROM node:16-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY --from=build /app/packages/backends/hive-gateway/dist .
COPY --from=build /app/packages/backends/hive-gateway/package.json .
COPY --from=build /app/packages/backends/hive-gateway/_node_modules ./node_modules/


CMD ["yarn", "run", "start:prod"]