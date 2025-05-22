Rails.application.routes.draw do
  get "/projects", to: "portfolio#projects"
  post "/contact", to: "portfolio#contact"
end
