FROM node:16-alpine

ARG BUILD_ENV=github


RUN apk update && apk add openssl bash

WORKDIR /app

COPY . . 

RUN npm install

RUN cd packages/backends/ && npm i

RUN npx lerna bootstrap --scope @hexhive-backends/gateway --include-dependencies

ENV NODE_ENV="production"

RUN npx lerna run build --scope @hexhive-backends/gateway --include-dependencies


CMD ["./wait-for-it.sh", "staging-command:80", "--", "npx", "lerna", "run", "start", "--scope", "@hexhive-backends/gateway"]