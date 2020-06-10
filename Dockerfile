FROM node:12.16.3

WORKDIR /usr/src/api

COPY ./ ./

RUN npm install

EXPOSE 4000

CMD [ "/bin/bash" ]
