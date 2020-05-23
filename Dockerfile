FROM node:12-alpine

# Create app directory
COPY . /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 2018 3018 8888 9229
CMD ["yarn", "start"]
