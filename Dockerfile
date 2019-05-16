FROM node:9.6.1

LABEL version="1.0"
LABEL description="App Web GPS Tracking NodeJS"
LABEL maintainer="Camilo Suaza Gallego - csuazag@eafit.edu.co"


ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeapp
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm start