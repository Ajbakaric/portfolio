#!/bin/bash
set -e

# Frontend
npm ci --prefix frontend
npm run build --prefix frontend
mkdir -p public
cp -a frontend/dist/* public/

# Backend
bundle install --without development test

# TEMP OK if you can't set a Post-deploy command in Render yet:
bundle exec rails db:migrate
bundle exec rails runner 'puts Project.pluck(:title, :link, :repo).inspect'

# IMPORTANT: Do NOT destroy data here.
