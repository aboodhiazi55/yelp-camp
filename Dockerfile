# Stage 1 - Build
FROM node:16 AS build
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
# CMD ["/bin/sh", "-c", "node app.js"]
# RUN npm run build

# Stage 2 - Run
FROM node:16-alpine
ENV CLOUCINARY_CLOUD_NAME=di0a0utla, CLOUCINARY_KEY=462928826959746, CLOUCINARY_SECRET=eY4tfWnYa1XGPoBJAREXtm009vk, DB_URL=mongodb+srv://abood:abood@cluster0.kgyc2mx.mongodb.net/?retryWrites=true&w=majority, MAPBOX_TOKEN=pk.eyJ1IjoiYWJvb2RoaWphemk1NSIsImEiOiJjbGNvc3dxaWIxenIyM29tdGpvcTF5c3IxIn0.L3xN8sn9VyvI9Zu4lzPBbw
RUN apk update && apk add nginx
RUN npm install pm2 -g

WORKDIR /app
# COPY --from=build /app/dist ./
COPY --from=build /app .
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod 777 /app/start.sh
RUN apk add --no-cache --upgrade bash
# CMD ["nginx", "-g", "daemon off;"]
# ENTRYPOINT ["/bin/sh", "-c", "pm2-runtime start ecosystem.config.js --env production"]
# ENTRYPOINT ["/bin/sh", "-c", "node app.js && nginx -g 'daemon off;'"]
# RUN pm2-runtime start ecosystem.config.js --env production
ENTRYPOINT /app/start.sh