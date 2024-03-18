# Stage 1: Build the Angular application
FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . ./
ARG configuration=production
RUN npm run build -- --configuration ${configuration}

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
# Copy the built files from the build stage
COPY --from=build /usr/src/app/dist/rooots /usr/share/nginx/html
# Copy Nginx configuration (if you have one)
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]