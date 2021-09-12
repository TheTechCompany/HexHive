FROM node:alpine

WORKDIR /runner

ADD package.json .
ADD tsconfig.json .

RUN yarn

COPY . .

CMD [ "yarn", "start"]