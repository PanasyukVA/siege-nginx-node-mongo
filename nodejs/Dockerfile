FROM node:14

WORKDIR /nodejs
COPY package.json .
RUN npm install
COPY . .
CMD npm start
