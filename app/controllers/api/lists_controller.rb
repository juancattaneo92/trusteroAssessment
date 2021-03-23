class Api::ListsController < ApplicationController

  def index
    @lists = List.all
    render :index
  end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def new
    @list = List.new
    render :new
  end

  def create
    @list = List.new(list_params)

    if @list.save
      redirect_to list_url(@list)
    else
      flash.now[:errors] = @list.errors.full_messages
      render :new
    end
  end

  def edit
    @list = List.find(params[:id])
    render :edit
  end

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      redirect_to list_url(@list)
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