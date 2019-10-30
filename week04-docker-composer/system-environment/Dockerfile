FROM node:latest
RUN mkdir -p /usr/src/system-environment
WORKDIR /usr/src/system-environment
COPY package.json /usr/src/system-environment/
RUN npm install
COPY . /usr/src/system-environment
RUN mkdir /root/.ssh
RUN chmod 700 /root/.ssh
RUN ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN ssh-agent bash -c 'ssh-add fall2019; git clone git@github.com:aarondean/isit320-dean-2019.git'
RUN rm fall2019
EXPOSE 30028
RUN node_modules/.bin/webpack
CMD [ "npm", "start" ]