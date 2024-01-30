FROM node:20-alpine3.19

WORKDIR /home/node/app

RUN npm install -g @angular/cli

EXPOSE 4200

CMD [ "node", "dist/main.js" ]