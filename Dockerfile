# Stage 1: Build
FROM node:22-alpine AS build-stage

# Set working directory
WORKDIR /app

# Install build dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:stable-alpine AS production-stage

# Copy the built files from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port and start
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
