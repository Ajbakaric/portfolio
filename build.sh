#!/bin/bash

# Fail fast on error
set -e

# Build frontend
npm install --prefix frontend
npm run build --prefix frontend
cp -a frontend/dist/* public/

# Build backend
bundle install
bundle exec rake db:migrate  

Project.destroy_all
