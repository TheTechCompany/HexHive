FROM node:14.15.0-alpine

ARG BUILD_ENV=github

RUN apk update && apk add openssl bash

WORKDIR /app

COPY . . 

RUN npm install

RUN cd packages/backends/ && npm i

RUN npx lerna bootstrap --scope @hexhive/auth-provider --include-dependencies

ENV NODE_ENV="production"

WORKDIR /app/packages/backends/hive-auth-provider

CMD ["yarn", "run", "start"]