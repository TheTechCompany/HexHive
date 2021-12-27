FROM node:alpine

RUN apk update && apk add openssl bash

WORKDIR /app

COPY . . 

RUN npm install

RUN npx lerna bootstrap --scope @hexhive/frontend-server --include-dependencies

ENV NODE_ENV="production"

RUN npx lerna run build --scope @hexhive/frontend-server --include-dependencies

WORKDIR /app/packages/backends/hive-frontend

CMD ["yarn", "run", "start:prod"]