FROM node:alpine

COPY . .

RUN yarn

RUN npx lerna bootstrap --scope @hexhive/auth --include-dependencies

EXPOSE 8090

ENV NODE_ENV='production'

CMD [ "npx", "lerna", "run", "--scope", "@hexhive/auth"]