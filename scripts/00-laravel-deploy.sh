#!/usr/bin/env bash

echo "==> Running deploy script..."

echo "Installing composer dependencies..."
composer install --no-dev --working-dir=/var/www/html

echo "Installing npm dependencies & building assets..."
cd /var/www/html
npm ci && npm run build

echo "Caching Laravel config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Caching views..."
php artisan view:cache

echo "Running database migrations..."
php artisan migrate --force

echo "Creating storage link..."
php artisan storage:link 2>/dev/null || true

echo "==> Deploy script completed!"
