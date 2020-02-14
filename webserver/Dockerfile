FROM node:12

RUN mkdir /var/app
WORKDIR /var/app

COPY package*.json /var/app/

RUN npm install

COPY . /var/app

# Do build here if needed

FROM node:12-alpine3.10

RUN mkdir /var/app

USER node

WORKDIR /var/app

COPY --from=0 --chown=node:node /var/app /var/app

RUN npm ci --only=production

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=5000
ENV PORT $PORT

EXPOSE $PORT

ENTRYPOINT ["node", "app"]
