#!/usr/bin/env bash
set -e

export PORT="${PORT:-80}"

echo "==> Starting Laravel container on port ${PORT}"

sed -i "s/^Listen .*/Listen ${PORT}/" /etc/apache2/ports.conf

mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

echo "==> Caching Laravel config"
php artisan config:cache

echo "==> Caching Laravel routes"
php artisan route:cache

echo "==> Caching Laravel views"
php artisan view:cache

echo "==> Running database migrations"
php artisan migrate --force

echo "==> Creating storage link"
if [ -e public/storage ] || [ -L public/storage ]; then
    echo "==> Storage link already exists"
else
    php artisan storage:link
fi

echo "==> Starting Apache"
exec apache2-foreground
