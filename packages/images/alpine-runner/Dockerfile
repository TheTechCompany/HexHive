FROM alpine:latest

RUN apk update 
RUN apk add curl

RUN sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b /usr/local/bin

WORKDIR /runner

RUN apk add poppler-utils

ADD entrypoint.sh .

CMD [ "./entrypoint.sh" ]