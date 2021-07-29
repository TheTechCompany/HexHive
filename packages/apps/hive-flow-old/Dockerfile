FROM mhart/alpine-node:8

RUN addgroup -S norights -g 1000 \
   && adduser -S -g underdog -u 1000 norights \
   && echo "builder ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers \
USER underdog
RUN apk -U add git openssh
WORKDIR /tmp
COPY package.json /tmp/

RUN mkdir -p /root/.ssh
COPY .ssh/react_container_rsa /root/.ssh/id_rsa
RUN chmod 700 /root/.ssh/id_rsa
RUN ssh-keyscan saaanic.com > /root/.ssh/known_hosts
RUN npm install webpack -g
RUN npm config set registry http://registry.npmjs.org/ && npm install

RUN mkdir /webpacked
WORKDIR /webpacked
COPY . /webpacked
RUN cp -a /tmp/node_modules /webpacked
RUN rm -rf /tmp /container_view /norights/.ssh 
RUN npm run build

ENV NODE_ENV=production
ENV PORT=4000
ENV BACKEND_URL="http://localhost:3001"

CMD ["node", "server.js"]

EXPOSE 4000




