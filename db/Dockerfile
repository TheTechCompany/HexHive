FROM postgres:alpine

RUN apk update; apk add git alpine-sdk cmake openssl-dev krb5-pkinit krb5-dev krb5

WORKDIR /tmp/

RUN git clone https://github.com/timescale/timescaledb.git

WORKDIR /tmp/timescaledb

RUN git checkout 2.5.1

RUN ./bootstrap

WORKDIR /tmp/timescaledb/build

RUN make

RUN make install

WORKDIR /

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD ["postgres"]
