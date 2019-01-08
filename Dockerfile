# Dockerfile
FROM node:alpine

## Create base directory
RUN mkdir /src

# Create app directory
WORKDIR /src

# Install app dependencies
COPY src/package*.json ./
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production --quiet

# Bundle app source
COPY . /src

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s CMD node healthcheck.js

# Start app
CMD [ "node", "server.js" ]
EXPOSE 8080