source "https://rubygems.org"

ruby "3.3.1"

# Rails version
gem "rails", "~> 7.1.5", ">= 7.1.5.1"

# Use Puma web server
gem "puma", ">= 5.0"

# Use Rack CORS for handling Cross-Origin Resource Sharing
gem "rack-cors"

# Use Active Model has_secure_password (optional)
# gem "bcrypt", "~> 3.1.7"

# Use pg for production (Render requires this)
group :production do
  gem "pg"
end

# Use sqlite3 for development and test
group :development, :test do
  gem "sqlite3", ">= 1.4"
end

# Debugging & test gems
group :development, :test do
  gem "debug", platforms: %i[mri windows]
  gem "rspec-rails"
  gem "factory_bot_rails"
end

# Required on Windows for time zone info
gem "tzinfo-data", platforms: %i[windows jruby]

# Improve boot performance
gem "bootsnap", require: false
