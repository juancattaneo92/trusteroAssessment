class Api::ListsController < ApplicationController

  def index
    @lists = List.all
    render :index
  end

  def show
    @list = List.find(params[:id])
    render :show
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

  def edit
    @list = List.find(params[:id])
    render :edit
  end

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      redirect_to api_list_url(@list)
    else
      flash.now[:errors] = @list.errors.full_messages
      render :edit
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to lists_url
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end

end