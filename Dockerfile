FROM node:14-slim as build

SHELL ["/bin/bash","-c"]

WORKDIR /app

RUN mkdir www


ARG ENVIRONMENT=PRODUCTION


COPY ["package.json","./"]

RUN npm install

RUN if [ "${ENVIRONMENT}" == "PRODUCTION" ] || [ "${ENVIRONMENT}" == "TEST" ]; then npm install -g cordova; fi

COPY . .

RUN chmod +x entrypoint.sh
RUN /bin/bash entrypoint.sh


EXPOSE 3000

ENTRYPOINT /bin/bash entrypoint.sh


FROM nginx:alpine
COPY --from=build /app/www /usr/share/nginx/html
