FROM node:lts-alpine
LABEL maintainer "fajarantono.id@gmail.com"

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
EXPOSE 3000

COPY package.json yarn.lock ./
RUN touch .env

RUN mkdir data
RUN set -x && yarn

COPY . .

CMD [ "yarn", "start:dev" ]
