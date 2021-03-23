json.lists do 
    json.set! @list.id do 
        json.extract! @list, :id, :name
    end
end