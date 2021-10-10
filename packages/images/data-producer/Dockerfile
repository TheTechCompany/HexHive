FROM node:alpine

WORKDIR /runner

ADD package.json .
ADD tsconfig.json .

RUN yarn

COPY ./src ./src

ADD task.json .

CMD [ "yarn", "start"]