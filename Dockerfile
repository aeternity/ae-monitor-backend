FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
RUN npm i -g yarn
RUN yarn install

COPY . /app

EXPOSE 3000

CMD npm run db:create; node server.js
