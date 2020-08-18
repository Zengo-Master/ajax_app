class ApplicationController < ActionController::Base
  def index  # indexアクションを定義した
    @post = "これはコントローラーで定義したインスタンス変数を確認するための文字列です"
  end
end
