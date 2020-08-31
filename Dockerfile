FROM node:12

RUN mkdir /compara-coding-test
WORKDIR ./compara-coding-test

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080