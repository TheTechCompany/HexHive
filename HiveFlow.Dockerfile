FROM node:alpine

RUN apk update
RUN apk add -U bash tzdata openssh git
ENV TZ=Pacific/Auckland
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV REACT_APP_API=""

WORKDIR /app

COPY . .

RUN npm install

RUN npx lerna bootstrap --scope @hexhive-backends/flow --include-dependencies

RUN npx lerna run build --scope @hexhive-backends/flow --include-dependencies

ENV NODE_ENV='production'

CMD ["npm", "run", "start:flow-backend"]

