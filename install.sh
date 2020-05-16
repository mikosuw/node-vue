#! /bin/bash

set -e

cp .env.example .env

services=(
    client
    server
)
parent=`pwd`
docker build -t node .
for service in ${services[*]}; do
    printf "${ylw}Running npm install for ${service}.${end}\n"
    docker run --name node --rm -v ${parent}/${service}/app:/srv/app -it node
done

docker-compose up -d
