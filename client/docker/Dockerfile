FROM node:alpine
RUN apk add bash

RUN mkdir -p /srv/app
WORKDIR /srv/app

# COPY app/package.json /srv/app
# COPY app/package-lock.json /srv/app
# RUN npm install

# COPY . /srv/app

RUN touch ~/.bashrc
RUN echo "PS1='\u@client:\w\$ '" >> ~/.bashrc

EXPOSE 8080
CMD [ "yarn", "serve" ]
