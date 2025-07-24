Rails.application.routes.draw do
  get '/projects', to: 'portfolio#projects'
  post '/contact', to: 'portfolio#contact'
  get '/run_seed', to: 'portfolio#run_seed'
  get '/wipe_projects', to: 'portfolio#wipe_projects' # 🆕 Add this
end
