FROM node:16-alpine

ARG BUILD_ENV=github


RUN apk update && apk add openssl

WORKDIR /app

COPY . . 

RUN npm install

RUN cd packages/backends/ && npm i

RUN npx lerna bootstrap --scope @hexhive-backends/command --include-dependencies

ENV NODE_ENV="production"

RUN npx lerna run build --scope @hexhive-backends/command --include-dependencies

WORKDIR /app/packages/backends/hive-command
CMD ["yarn", "run", "start:prod"]