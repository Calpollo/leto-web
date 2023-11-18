FROM node:16 as build
WORKDIR /app

RUN apt-get update && apt-get install -y libnotify-dev libnss3 libxss1 libasound2 xvfb

COPY package*.json ./
RUN NODE_ENV=production npm ci

COPY . .
RUN npm run build

FROM nginx:alpine as server
WORKDIR /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

COPY --from=build app/dist .

ENTRYPOINT ["nginx", "-g",  "daemon off;"]
