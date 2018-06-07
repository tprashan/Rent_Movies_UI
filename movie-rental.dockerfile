FROM node:7.0.0

ENV APP /var/www/rent_movies_ui

WORKDIR $APP

COPY . $APP

EXPOSE 3000

ENTRYPOINT ["node","./scripts/server.js"]