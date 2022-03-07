FROM node:alpine

WORKDIR /runner

COPY package.json .
COPY tsconfig.json .

RUN yarn

COPY ./src ./src

RUN yarn build

ADD task.json .

CMD [ "node", "dist/index.js" ]