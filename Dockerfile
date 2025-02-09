# Use the latest stable Node.js version with Alpine
FROM node:20

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

EXPOSE 5173

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "5173"]
