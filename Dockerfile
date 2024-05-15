FROM node:21.7.1
COPY package.json /app/
COPY . /app/
WORKDIR /app
RUN npm install
EXPOSE 8080
ENTRYPOINT ["npm", "run"]
