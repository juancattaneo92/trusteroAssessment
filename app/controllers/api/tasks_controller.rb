class Api::TasksController < ApplicationController

  def index
    if(params[:list_id])
      @tasks = Task.where(list_id: params[:list_id])
      render :index
    else
      @tasks = Task.all
      render :index
    end 
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.create(task_params)
    if @task.save
      render :show
    else
      flash.now[:errors] = @task.errors.full_messages
      render :show
    end
  end

  def update
    @task = Task.find_by(id: params[:id])

    if @task.update(task_params)
      render :show
    else
      flash.now[:errors] = @task.errors.full_messages
      render :show
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :show
  end

  private
  def task_params
    params.require(:task).permit(:id, :title, :description, :status, :list_id)
  end

end
