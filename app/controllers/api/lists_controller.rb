class Api::ListsController < ApplicationController

  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
  end

  def create
    # debugger
    @list = List.create(list_params)
    if @list.save
      redirect_to "/api/lists"
      # render :index
    else
      flash.now[:errors] = @list.errors.full_messages
      render :index
    end
  end

  def update
    @list = List.find_by(id: params[:id])

    if @list.update(list_params)
      # redirect_to "/api/lists"
      render :index
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