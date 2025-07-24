Rails.application.routes.draw do
  get '/run_seed', to: 'portfolio#run_seed'
  get "/projects", to: "portfolio#projects"
  post "/contact", to: "portfolio#contact"
end
