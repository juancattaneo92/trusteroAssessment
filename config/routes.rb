Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :lists, only:[:index, :show, :create, :update, :destroy]
    resources :tasks, only:[:index, :show, :create, :update, :destroy]
    resources :lists, only:[:show, :index, :create] do 
      resources :tasks, only:[:index, :create]
    end
    resources :tasks, only: [:show, :index, :create] do
      resources :comments, only:[:index, :create]
    end
    resources :comments, only:[:index, :show, :create, :update, :destroy]
  end 

  root to: "static_pages#root"
end
