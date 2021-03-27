import React from 'react';
import { connect } from 'react-redux';
import ShowTask from "./show_task";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchTasks, fetchTask, deleteTask  } from '../../actions/task_actions';
import { fetchCommentsByTaskId,fetchComments } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom' 

const mSTP = (state, ownProps) => {
  return {
    task: state.entities.tasks[ownProps.match.params.taskId],
    taskId: ownProps.match.params.taskId
  };
};

const mDTP = (dispatch) => {
  return {
    openModal: (payload) => dispatch(openModal(payload)),
    closeModal: () => dispatch(closeModal()),
    fetchTasks: () => dispatch(fetchTasks()),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    fetchComments: () => dispatch(fetchComments()),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    fetchCommentsByTaskId: (listId) => dispatch(fetchCommentsByTaskId(listId)),

  };
};

export default withRouter(connect(mSTP, mDTP)(ShowTask));