FROM node:16 as dev

WORKDIR /home/node/app

COPY package.json .

COPY yarn.lock .

RUN yarn

FROM 16.13.1-alpine3.14 as prod

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json .

COPY --chown=node:node yarn.lock .

RUN yarn --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000

ENTRYPOINT ["yarn", "dev"]
