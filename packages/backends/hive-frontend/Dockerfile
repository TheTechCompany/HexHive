FROM node:alpine as build

RUN apk update && apk add openssl bash

WORKDIR /app

COPY . . 

RUN yarn

RUN npx lerna bootstrap --scope @hexhive/frontend-server --include-dependencies

ENV NODE_ENV="production"

RUN npx lerna run build --scope @hexhive/frontend-server --include-dependencies

WORKDIR /app/packages/backends/hive-frontend

RUN cp -Lr /app/packages/backends/hive-frontend/node_modules/ _node_modules/

FROM node:alpine 

RUN apk update; apk add openssl

WORKDIR /app

COPY --from=build /app/packages/backends/hive-frontend/_node_modules ./node_modules/
COPY --from=build /app/packages/backends/hive-frontend/package.json .
COPY --from=build /app/packages/backends/hive-frontend/dist .

CMD ["yarn", "run", "start:prod"]