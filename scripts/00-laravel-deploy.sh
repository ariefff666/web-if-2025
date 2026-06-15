#!/usr/bin/env bash
set -e

echo "==> Running deploy script..."

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
