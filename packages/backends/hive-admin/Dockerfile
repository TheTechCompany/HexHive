FROM node:alpine

RUN apk update && apk add openssl bash

WORKDIR /app

COPY . . 

RUN yarn

RUN npx lerna bootstrap --scope @hexhive/admin --include-dependencies

ENV NODE_ENV="production"

RUN npx lerna run build --scope @hexhive/admin --include-dependencies

WORKDIR /app/packages/backends/hive-admin/src/web-ui

RUN yarn

RUN yarn build

WORKDIR /app/packages/backends/hive-admin

CMD ["yarn", "run", "start"]