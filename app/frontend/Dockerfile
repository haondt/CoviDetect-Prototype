FROM node:alpine
WORKDIR /code/

# copy frontend package.json files
COPY ./frontend/package.json .
#COPY ./frontend/package-lock.json .

#ENV PATH /app/node_modules/.bin:$PATH

# install node modules
#RUN apk add --no-cache git
RUN npm install --silent
RUN npm install --save react-refresh --silent
RUN npm install --save react-scripts -g --silent
RUN npm install --save react-router-dom --silent
RUN npm install --save redux react-redux --silent

# copy rest of frontend source files
COPY ./frontend .

#EXPOSE 3000

CMD ["npm", "start"]

