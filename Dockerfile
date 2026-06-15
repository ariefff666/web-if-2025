FROM node:22-alpine AS frontend

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY resources ./resources
COPY public ./public
COPY vite.config.js tsconfig.json tailwind.config.js postcss.config.js ./
RUN npm run build

FROM richarvey/nginx-php-fpm:3.1.6

COPY . .

RUN composer install --no-dev --optimize-autoloader --no-interaction --working-dir=/var/www/html
RUN chmod +x /var/www/html/scripts/00-laravel-deploy.sh

COPY --from=frontend /app/public/build /var/www/html/public/build

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

CMD ["/start.sh"]
