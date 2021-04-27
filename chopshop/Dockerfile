FROM node:10
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ./src src
COPY ./public public 
COPY ./package.json .
RUN npm install
EXPOSE 4242
CMD ["npm", "run", "start"]  
