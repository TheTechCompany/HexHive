FROM node:16-slim as build

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

ENV NODE_ENV="development"

COPY . . 

RUN yarn

WORKDIR /app/packages/backends/hive-frontend

RUN cp tsconfig.server.json tsconfig.json

RUN npx lerna run build:prod --scope @hexhive/frontend-server


# RUN cp -Lr /app/packages/backends/hive-frontend/node_modules/ _node_modules/

# FROM node:16-slim 

# RUN apt-get update && apt-get install -y openssl

# WORKDIR /app

# COPY --from=build /app/packages/backends/hive-frontend/_node_modules ./node_modules/
# COPY --from=build /app/packages/backends/hive-frontend/package.json .
# COPY --from=build /app/packages/backends/hive-frontend/dist .

CMD ["yarn", "run", "start:prod"]