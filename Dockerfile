# Stage 1: Build Angular application
FROM node:16.13 as node
WORKDIR /app
COPY . .
EXPOSE 4200
RUN npm install
RUN npm run build 
# Stage 2: Serve the application using NGINX
FROM nginx:alpine
COPY --from=node /app/dist/welcome-to-esprit /usr/share/nginx/html
