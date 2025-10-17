

# # Use Node.js LTS version as base image
# FROM node:lts-alpine AS build


# ENV NODE_OPTIONS=--max_old_space_size=4096


# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and yarn.lock to the container
# COPY package.json yarn.lock ./

# # Install build essentials
# RUN apk add --no-cache build-base

# # Install dependencies
# RUN yarn install

# # Copy the rest of the application code to the container
# COPY . .

# # Build the React app
# RUN yarn build

# # Use a smaller Nginx image for serving the static files
# FROM nginx:alpine

# # Copy built app to nginx public directory
# COPY --from=build /app/dist /usr/share/nginx/html

# #https://apinursing.softlytica.com
# # Expose port 80
# EXPOSE 80

# # Command to run the nginx server
# CMD ["nginx", "-g", "daemon off;"]



# Use Node.js LTS version as base image
FROM node:lts-alpine AS build

ENV NODE_OPTIONS=--max_old_space_size=4096

# Set the working directory in the container
WORKDIR /app

# Copy package files (use package-lock.json for npm)
COPY package.json package-lock.json ./

# Install build essentials (needed for native deps)
RUN apk add --no-cache build-base

# Install dependencies (production + dev, since we need to build)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Final stage: Nginx
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80