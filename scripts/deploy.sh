#!/bin/bash

# Deployment script for Coolify
# This script handles database migrations and admin user setup

set -e

echo "🚀 Starting deployment..."

# Wait for database to be ready
echo "⏳ Waiting for database..."
npx wait-on tcp:postgres:5432 -t 60000

# Run database migrations
echo "📦 Running database migrations..."
npx prisma migrate deploy

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Check if admin user exists
echo "👤 Checking admin user..."
ADMIN_EXISTS=$(npx prisma db seed --preview-feature 2>/dev/null || echo "no")

if [ "$ADMIN_EXISTS" = "no" ]; then
  echo "🛠️  Setting up admin user..."
  node scripts/setup-admin.js
fi

echo "✅ Deployment completed successfully!"