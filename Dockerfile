FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 2018 3018 8888 9229
CMD [ "yarn", "start" ]
