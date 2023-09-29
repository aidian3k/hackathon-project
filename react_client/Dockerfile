FROM node:latest
WORKDIR /app

# Copy of package-json and installing dependencies
COPY package.json .
RUN npm i --silent
ENV PATH /app/node_modules/.bin$PATH

# Exposing port and running app
COPY . ./
EXPOSE 3000

ENTRYPOINT ["npm", "start"]