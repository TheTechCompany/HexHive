FROM node:16-alpine

ARG BUILD_ENV=github

RUN apk update && apk add openssl bash

WORKDIR /app

COPY . . 

RUN npm install

RUN npx lerna bootstrap --scope @hexhive/gateway --include-dependencies

ENV NODE_ENV="production"

RUN npx lerna run build --scope @hexhive/gateway --include-dependencies

WORKDIR /app/packages/backends/hive-gateway

CMD ["yarn", "run", "start", "--endpoints", "/tmp/endpoints.json"]