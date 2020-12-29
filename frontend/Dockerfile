FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

ARG APP_API_URL
ENV APP_API_URL $APP_API_URL

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "build" ]