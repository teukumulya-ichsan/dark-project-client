FROM node:12.13.0-apline

RUN mkdir -p /srv/app/rent-car-client
WORKDIR /srv/app/rent-car-client

COPY package.json /srv/app/rent-car-client
COPY package-lock.json /srv/app/rent-car-client

RUN npm install

COPY . /srv/app/rent-car-client

CMD [ "npm", "start" ] 
