class Api::TasksController < ApplicationController

  def index
    @tasks = Task.all
    render :index
  end

  def show
    @task = Task.find(params[:id])
    render :show
  end

  def new
    @task = Task.new
    render :new
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to task_url(@task)
    else
      flash.now[:errors] = @task.errors.full_messages
      render :new
    end
  end

  def edit
    @task = Task.find(params[:id])
    render :edit
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      redirect_to task_url(@task)
    else
      flash.now[:errors] = @task.errors.full_messages
      render :edit
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_url
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :status, :list_id)
  end

end
