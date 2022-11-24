FROM node:15

WORKDIR /app

COPY ./papackage.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

