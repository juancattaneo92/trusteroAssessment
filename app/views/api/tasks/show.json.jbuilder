json.tasks do 
    json.set! @task.id do 
        json.partial! '/api/tasks/task', task: @task
    end
end