# Use the latest stable Node.js version with Alpine
FROM node:20-alpine

LABEL authors="dchasanidis"

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all source files
COPY . .

# Build the React app
RUN npm run build

# Install a static server to serve the built app
RUN npm install -g serve

# Expose the correct port
EXPOSE 5173

# Set environment variables for serve
ENV PORT=5173
# Ensure it binds to all interfaces
ENV HOST=0.0.0.0

# Serve the built app on the correct port
CMD ["serve", "-s", "dist", "-l", "5173", "--no-clipboard"]
