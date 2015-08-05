FROM nodesource/trusty:iojs-2.5.0

ENTRYPOINT ["node", "app"]

ENV NODE_ENV production
ENV PORT 3017

EXPOSE $PORT

ADD . /app
WORKDIR /app

RUN npm install --production