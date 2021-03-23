import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => {
  return ({
    type: RECEIVE_COMMENTS,
    comments
  })
}

const receiveComment = payload => {
  return ({
    type: RECEIVE_COMMENT,
    payload
  })
}

const removeComment = commentId => {
  return ({
    type: REMOVE_COMMENT,
    commentId: commentId
  })
}

//Thunk actions

export const fetchComments = () => dispatch => {
  return CommentAPIUtil.fetchComments()
    .then(res => dispatch(receiveComments(res)))
}

export const fetchComment = (CommentId) => dispatch => {
  return CommentAPIUtil.fetchComment(CommentId)
    .then(res => dispatch(receiveComment(res)))
}

export const createComment = (taskId, comment) => dispatch => {
  return CommentAPIUtil.createComment(taskId, comment)
    .then(res => dispatch(receiveComment(res)))
}

export const updateComment = (comment) => dispatch => {
  return CommentAPIUtil.updateComment(comment)
    .then(res => dispatch(receiveComment(res)))
}

export const deleteComment = (commentId) => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
}