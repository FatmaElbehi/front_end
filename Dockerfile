# Use an official Node runtime as a parent image
FROM node:18.12.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code into the container at /app
COPY . .

# Build the app
RUN npm run build

# Set the command to run the app
CMD ["npm", "start"]
