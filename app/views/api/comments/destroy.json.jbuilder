json.comments do 
    json.set! @comment.id do 
        json.extract! @comment, :id, :body, :task_id
    end
end