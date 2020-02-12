FROM node:12

ENTRYPOINT ["node", "app"]

ENV NODE_ENV production
ENV PORT 3500

EXPOSE $PORT

ADD . /app
WORKDIR /app

RUN npm install --production
