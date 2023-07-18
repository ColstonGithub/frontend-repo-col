# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /frontend
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --silent

# Copy the rest of the application code to the working directory
COPY . .

# Add a command to run the clean script before starting the server
RUN npm run clean

# Build the frontend app
RUN npm run build

# Set the command to start the server
CMD ["npm", "start"]
