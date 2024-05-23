FROM node:20

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application using the new script
RUN npm run build

# Expose the application port
EXPOSE 3000

# Serve the application using the new script
CMD ["npm", "run", "serve"]
