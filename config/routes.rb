Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :update, :destroy]
  resources :trips, only: [:index, :show, :create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/trips/:id/reviews", to: "trips#reviews"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
