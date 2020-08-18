class PostsController < ApplicationController
  def index # アクションはindex
    @posts = Post.all  # インスタンス変数の生成　全レコードを@postsに代入
  end

  def new # ページを表示するだけなので定義のみ
  end

  def create
    Post.create(content: params[:content]) # paramsに入ったcontentというデータを生成

    # 以下でも保存される
    # post = Post.new(content: params[:content])
    # post.save
  end

end
