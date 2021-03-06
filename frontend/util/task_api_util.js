export const fetchTasks = () => {
  return $.ajax({
    url: `/api/tasks`,
    method: "GET",
  })
}

export const fetchTasksByListId = (listId) => {
  return $.ajax({
    url: `/api/tasks`,
    method: "GET",
    data: { list_id: listId }
  })
}

export const fetchTask = (taskId) => {
  return $.ajax({
    url: `/api/tasks/${taskId}`,
    method: "GET",
  })
}
export const createTask = (listId, task) => {
  return $.ajax({
    url: `/api/lists/${listId}/tasks`,
    method: "POST",
    data: {
      task: task,
      listId: listId,
    }
  })
}
export const updateTask= (task) => {
  return $.ajax({
    url: `/api/tasks/${task.id}`,
    method: "PATCH",
    data: { task },
  })
}
export const deleteTask= taskId => {
  return $.ajax({
    url: `/api/tasks/${taskId}`,
    method: "DELETE"
  })
}