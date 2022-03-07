FROM node:alpine

WORKDIR /runner

ADD package.json .
ADD tsconfig.json .

RUN yarn

COPY ./src ./src

RUN yarn build

ADD task.json .

CMD [ "node", "dist/index.js" ]