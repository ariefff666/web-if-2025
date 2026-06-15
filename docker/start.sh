#!/bin/bash
set -e

# Use PORT from environment (Render provides this), default to 10000
export PORT="${PORT:-10000}"

# Update Apache port configuration
sed -i "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf

# Laravel production optimizations
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run database migrations
php artisan migrate --force

# Create storage symlink (ignore if already exists)
php artisan storage:link 2>/dev/null || true

# Start Apache in foreground
apache2-foreground
