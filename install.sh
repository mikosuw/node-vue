#! /bin/bash
services=(
    client
    server
)

install_dependencies() {
    docker build -t node .
    for service in ${services[*]}; do
        printf "${ylw}Running nom install for ${service}.${end}\n"
        docker run --name node --rm -v ${service}/app:/srv/app -it node install
    done
}

docker-compose up -d