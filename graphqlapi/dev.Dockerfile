FROM node:8-alpine
RUN apk add --no-cache tini

RUN mkdir /server
WORKDIR /server

COPY package.json .
COPY yarn.lock .
RUN yarn

ENTRYPOINT ["npm", "run"]
