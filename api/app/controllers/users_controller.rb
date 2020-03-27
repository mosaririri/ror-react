class UsersController < ApplicationController
  # CSRFトークン認証を通過させ為に記述
  skip_before_action :verify_authenticity_token

  def index
    @user = User.all
    render json: @user
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end


                                      
end
