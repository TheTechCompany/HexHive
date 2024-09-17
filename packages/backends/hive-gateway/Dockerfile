FROM node:16-slim as build

ARG BUILD_ENV=github

RUN apt-get update && apt-get install -y openssl git build-essential python3

WORKDIR /app

ENV NODE_ENV="development"

COPY . . 

RUN yarn

WORKDIR /app/packages/backends/hive-gateway

RUN cp tsconfig.server.json tsconfig.json

RUN npx lerna run build:prod --scope @hexhive/gateway


# RUN cp -Lr /app/packages/backends/hive-gateway/node_modules/ _node_modules/

# FROM node:16-slim

# RUN apt-get update && apt-get install -y openssl

# WORKDIR /app

# COPY --from=build /app/packages/backends/hive-gateway/dist .
# COPY --from=build /app/packages/backends/hive-gateway/package.json .
# COPY --from=build /app/packages/backends/hive-gateway/_node_modules ./node_modules/


CMD ["yarn", "run", "start:prod"]