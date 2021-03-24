import React from 'react';
import { connect } from 'react-redux';
import ShowTask from "./show_task";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchTasks, fetchTask, deleteTask } from '../../actions/task_actions';
import { fetchList } from '../../actions/list_actions';
import { fetchComments } from '../../actions/comment_actions';


// import { fetchList, deleteList, updateList } from '../../actions/list_actions';

const mSTP = (state, ownProps) => {
  return {
    tasks: Object.values(state.entities.tasks),
    // list: state.entities.lists[ownProps.match.params.listId],
    list: state.entities.lists
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
  };
};

export default connect(mSTP, mDTP)(ShowTask);