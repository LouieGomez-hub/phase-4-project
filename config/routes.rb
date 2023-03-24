Rails.application.routes.draw do
  resources :reviews
  resources :trips
  resources :users
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
