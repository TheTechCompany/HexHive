FROM postgres:alpine

RUN apk update; apk add git alpine-sdk cmake openssl

WORKDIR /tmp/

RUN git clone https://github.com/timescale/timescaledb.git

WORKDIR /tmp/timescaledb

RUN git checkout 2.5.1

RUN ./bootstrap

WORKDIR /tmp/timescaledb/build

RUN make

RUN make install
