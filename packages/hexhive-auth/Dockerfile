FROM node:alpine

COPY package.json .

RUN yarn

COPY . .

CMD [ "yarn", "start" ]