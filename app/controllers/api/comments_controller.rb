class Api::CommentsController < ApplicationController
  
  def index
    if(params[:task_id])
      @comments = Comment.where(task_id: params[:task_id])
      render :index
    else
      @comments = Comment.all
      render :index
    end 
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.create(comment_params)
    # debugger
    if @comment.save
      render :show
    else
      flash.now[:errors] = @comment.errors.full_messages
    end
  end

  def update
    @comment = Comment.find(params[:id])
    # debugger
    if @comment.update(comment_params)
      render :show
    else
      flash.now[:errors] = @comment.errors.full_messages
      render :show
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:id, :body, :task_id)
  end
end
