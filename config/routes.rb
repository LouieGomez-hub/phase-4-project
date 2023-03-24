Rails.application.routes.draw do
  resources :trips
  resources :users
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
