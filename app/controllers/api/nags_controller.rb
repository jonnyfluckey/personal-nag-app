class Api::NagsController < ApplicationController

  def index
    render json: @user.nag.all
  end

  def create
    @nag = @user.nag.new(nag_params)

    if @nag.save
      render json: @nag
    else
      render json: { errors: @nag.errors }, status: unprocessable_entity
    end
  end

  def update
    @nag = @user.nag.find(params[:id])

    if @nag.update(nag_params)
      render json: @nag
    else
      render json: { errors: @nag.errors }, status: unprocessable_entity
    end

  end

  def destroy
    @nag = @user.nag.find(params[:id])

    @nag.destroy
    render json: { message: "Nag was deleted" }
  end

  private

  def nag_params
    params.require(:nag).permit(:name, :body)
  end
end
