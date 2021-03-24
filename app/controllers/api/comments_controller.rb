class Api::CommentsController < ApplicationController
  
  def index
    @comments = Comment.all
    render :index
  end

  def create
    @comment = Comment.create(comment_params)

    if @comment.save
      redirect_to api_comment_url(@comment)
    else
      flash.now[:errors] = @comment.errors.full_messages
      render :new
    end
  end

  def edit
    @comment = Comment.find(params[:id])
    render :edit
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      redirect_to api_comment_url(@comment)
    else
      flash.now[:errors] = @comment.errors.full_messages
      render :edit
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to api_comments_url
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :task_id)
  end
end
