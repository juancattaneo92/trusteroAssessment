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

  def create
    @comment = Comment.create(comment_params)

    if @comment.save
      render :index
    else
      flash.now[:errors] = @comment.errors.full_messages
      render :index
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])

    if @comment.update(comment_params)
      render :index
    else
      flash.now[:errors] = @comment.errors.full_messages
      render :index
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :index
  end

  private
  def comment_params
    params.require(:comment).permit(id: :body, :task_id)
  end
end
