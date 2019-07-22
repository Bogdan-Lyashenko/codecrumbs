FROM node:12-alpine

# Create app directory
# WORKDIR /usr/src/app
COPY . /app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 2018 3018 8888 9229
ENTRYPOINT [ "node",  "cli/index.cli.js" ]
CMD ["codecrumbs"]
