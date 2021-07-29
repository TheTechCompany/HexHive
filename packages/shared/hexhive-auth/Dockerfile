FROM node:alpine

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8090

CMD [ "yarn", "start" ]