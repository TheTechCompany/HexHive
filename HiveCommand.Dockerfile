FROM node:16-alpine

ARG BUILD_ENV=github

RUN apk update && apk add openssl

WORKDIR /app

COPY . . 

RUN npm install

RUN cd packages/backends/ && npm i

RUN npx lerna bootstrap --scope @hexhive-backends/command --include-dependencies

RUN npx lerna run build --scope @hexhive-backends/command --include-dependencies


CMD ["npm", "run", "start:command-backend"]