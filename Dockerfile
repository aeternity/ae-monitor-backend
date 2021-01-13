FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 3000

CMD yarn run db:create; node index.js
