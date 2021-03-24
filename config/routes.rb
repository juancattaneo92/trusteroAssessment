Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :lists, only:[:index, :show, :create, :update, :delete]
    resources :tasks, only:[:index, :show, :create, :update, :delete]
    resources :comments, only:[:index, :show, :create, :update, :delete]
  end 

  root to: "static_pages#root"
end
