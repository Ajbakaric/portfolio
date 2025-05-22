Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # Later, replace * with your deployed frontend domain
    resource '*', headers: :any, methods: [:get, :post]
  end
end
