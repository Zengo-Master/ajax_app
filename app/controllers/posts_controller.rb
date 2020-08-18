class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create
    Post.create(content: params[:content]) # paramsに入ったcontentというデータを生成
    redirect_to action: :index # トップページにリダイレクト
  end

  def checked
    post = Post.find(params[:id]) # 既読のメモidを取得
    if post.checked # 既読ならば
      post.update(checked: false) # updateはActiveRecordメソッドのひとつ
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id]) # 既読・未読が変わったメモid
    render json: { post: item } # JSON形式でchecked.jsに返却
  end
end