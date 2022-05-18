FROM node:14 AS web

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=web /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off"]