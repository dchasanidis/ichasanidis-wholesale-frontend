# Use the official Node.js image as the base image
FROM node:20-alpine

LABEL authors="dchasanidis"
# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Expose the port Vite uses by default
EXPOSE 5173

# Set the environment variables for Vite
ENV NODE_ENV=production

# Run in preview mode
CMD ["npm", "run", "build"]
CMD ["npm", "run", "preview"]
