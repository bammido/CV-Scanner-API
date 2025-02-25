FROM node:18
WORKDIR /usr/src/cv_scanner
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "start:docker"]