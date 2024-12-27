
# Stage 1: Build the React application
FROM node:lts-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

ARG REACT_APP_API_BASE_URL
ARG REACT_APP_API_VERSION
ARG REACT_APP_REDIRECT_URL

# Set environment variables
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
ENV REACT_APP_API_VERSION=$REACT_APP_API_VERSION
ENV REACT_APP_REDIRECT_URL=$REACT_APP_REDIRECT_URL

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file

# Copy SSL certificates (make sure to replace with your actual certificate files)
# COPY fullchain.pem /etc/ssl/certs/fullchain.pem
# COPY privkey.pem /etc/ssl/private/privkey.pem

# Expose ports for HTTP and HTTPS
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
