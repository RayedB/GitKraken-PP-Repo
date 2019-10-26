FROM node:12.3-alpine

COPY . /home/node/app
WORKDIR /home/node/app

RUN npm install