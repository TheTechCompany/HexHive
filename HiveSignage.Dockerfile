FROM node:alpine-16

FROM node:16-alpine

RUN apk update && apk add openssl python3

WORKDIR /app

COPY ./packages/backends/hive-signage/ . 

RUN yarn

RUN yarn build

CMD ["./dist/index.js"]