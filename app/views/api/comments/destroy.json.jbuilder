json.comments do 
    json.set! @comment.id do 
        json.extract! @comment, :id, :body, :task_id, :updated_at, :created_at
    end
end