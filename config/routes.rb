Rails.application.routes.draw do
  resources :procedures, only: [:index]
  resources :appointments
  resources :patients, only: [:index, :show, :create, :destroy]
  resources :dentists, only: [:index, :show]

  post '/dentistlogin', to: 'session#dentistlogin'
  post '/patientlogin', to: 'session#patientlogin'
  delete '/logout', to: 'session#logout'

  # handling reload fallbacks
  get "*path",  to: "fallback#index"
end

