class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create
    Post.create(content: params[:content]) # paramsに入ったcontentというデータを生成
    redirect_to action: :index # トップページにリダイレクト
  end

end