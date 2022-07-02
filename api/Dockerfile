FROM golang:1.17.7-alpine

RUN apk update && apk add git

WORKDIR /go/src

RUN go get github.com/gin-gonic/gin