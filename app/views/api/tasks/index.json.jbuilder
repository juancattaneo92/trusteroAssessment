@tasks.each do |task|
    json.set! task.id do 
        json.extract! task, :id, :title, :description, :status, :list_id
    end
end