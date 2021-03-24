export const fetchComments = () => {
  return $.ajax({
    url: `/api/comments`,
    method: "GET",
  })
}

export const fetchCommentsByTaskId = (taskId) => {
  return $.ajax({
    url: `/api/comments`,
    method: "GET",
    data: { task_id: taskId }
  })
}

export const fetchComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: "GET",
  })
}
export const createComment = (taskId, comment) => {
  return $.ajax({
    url: `/api/comments/${taskId}/comments`,
    method: "POST",
    data: {
      comment: comment,
      taskId: taskId,
    }
  })
}
export const updateComment = (comment) => {
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: "PATCH",
    data: { comment },
  })
}
export const deleteComment = commentId => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE"
  })
}