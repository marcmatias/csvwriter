FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock /app

RUN yarn

COPY ./ /app

RUN chown -R node node_modules/

USER node
