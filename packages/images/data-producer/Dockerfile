FROM node:alpine

WORKDIR /runner

COPY . .

RUN yarn
RUN npx lerna bootstrap --scope @hexhive/data-producer --include-dependencies

WORKDIR /runner/packages/images/data-producer

CMD [ "yarn", "start" ]