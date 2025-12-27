# Stage 1: Build the React app
FROM node:20-alpine AS builder
WORKDIR /app
# Copy package files
COPY package*.json ./
# Install dependencies (including dev dependencies for build)
RUN npm ci
# Copy source code
COPY . .
# Build arguments for environment variables
ARG REACT_APP_API_URL=http://localhost/api
ENV REACT_APP_API_URL=$REACT_APP_API_URL
# Build the app
RUN npm run build
# Debug: List contents to see what was created
RUN ls -la /app
# Stage 2: Serve with nginx
FROM nginx:alpine
# Copy built assets from builder
# Vite outputs to 'dist' folder, not 'build'
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration for frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
