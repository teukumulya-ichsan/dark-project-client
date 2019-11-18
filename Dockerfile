FROM node:12.13.0-apline

RUN mkdir -p /srv/app/darkproject-client
WORKDIR /srv/app/darkproject-client

COPY package.json /srv/app/darkproject-client
COPY package-lock.json /srv/app/darkproject-client

RUN npm install

COPY . /srv/app/darkproject-client

CMD [ "npm", "start" ] 
