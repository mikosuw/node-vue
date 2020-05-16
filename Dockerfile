FROM node:alpine
RUN apk add bash

RUN mkdir -p /srv/app
WORKDIR /srv/app

CMD ["npm"]
