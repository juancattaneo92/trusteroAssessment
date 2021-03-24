import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchList, deleteList, updateList } from '../../actions/list_actions';
import { fetchTasks, createTask, fetchTasksByListId } from '../../actions/task_actions';
import ShowList from "./show_list";
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return {
    tasks: Object.values(state.entities.tasks),
    list: state.entities.lists[ownProps.match.params.listId],
    listId: ownProps.match.params.listId

  };
};

const mDTP = (dispatch) => {
  return {
    openModal: (payload) => dispatch(openModal(payload)),
    closeModal: () => dispatch(closeModal()),
    updateList: (list) => dispatch(updateList(list)),
    deleteList: (listId) => dispatch(deleteList(listId)),
    createTask: (listId, task) => dispatch(createTask(listId, task)),
    fetchTasks: () => dispatch(fetchTasks()),
    fetchList: (listId) => dispatch(fetchList(listId)),
    fetchTasksByListId: (listId) => dispatch(fetchTasksByListId(listId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(ShowList));