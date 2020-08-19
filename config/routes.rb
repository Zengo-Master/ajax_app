Rails.application.routes.draw do
  root 'posts#index'
  get 'posts', to: 'posts#index'
  post 'posts', to: 'posts#create'
# get 'posts', to: 'posts#checked' # クエリパラメーター
  get 'posts/:id', to: 'posts#checked' # パスパラメーター
end