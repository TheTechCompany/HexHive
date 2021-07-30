FROM node:alpine

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8090

ENV NODE_ENV='production'

CMD [ "yarn", "start" ]