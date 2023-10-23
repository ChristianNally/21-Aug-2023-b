Rails.application.routes.draw do
  resources :comments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', controller: 'users', action: :index
  # get 'login', to: 'users#index'

  # resources :characters
  # resources :facts

  resources :characters do
    resources :facts
  end
end
