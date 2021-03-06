class Api::ListsController < ApplicationController

  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
  end

  def create
    @list = List.create(list_params)
    if @list.save
      redirect_to "/api/lists"
    else
      flash.now[:errors] = @list.errors.full_messages
    end
  end

  def update

    @list = List.find_by(id: params[:id])
    if @list.update(list_params)
      render :show
    else
      flash.now[:errors] = @list.errors.full_messages
      render :show
    end
  end

  def destroy
    @list = List.find_by(id: params[:id])
    if @list.destroy
      render :show
    else
      render json: ["Cannot find list"], status: 404
    end
  end

  private
  def list_params
    params.require(:list).permit(:id, :name)
  end

end