FROM node:23

WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGO_URL "mongodb://mongo:27017"
ENV DB_NAME points
ENV COL_NAME dataPoints

RUN yarn
COPY . .

RUN yarn run build

CMD ["yarn", "run", "dev"]