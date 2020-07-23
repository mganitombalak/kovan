FROM node:lts-alpine as build-phase
WORKDIR /source_folder
COPY . ./
RUN npm install && npm install -g @angular/cli && ng build --prod

FROM nginx:1.19.1-alpine as runtime
LABEL maintainer = "helvacioglu"
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build-phase /source_folder/kovan-fe .
EXPOSE 80