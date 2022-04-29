FROM node:alpine as build

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

FROM node:alpine

WORKDIR /app

COPY --from=build /app/packages/backends/hive-admin/dist/* .

RUN mkdir node_modules

COPY --from=build /app/packages/backends/hive-admin/node_modules/ node_modules/

RUN mkdir web-ui

COPY --from=build /app/packages/backends/hive-admin/src/web-ui/build web-ui/build

CMD ["node", "index.js"]