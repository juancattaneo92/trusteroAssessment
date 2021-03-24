import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchList, deleteList, updateList } from '../../actions/list_actions';
import { fetchTasks, createTask } from '../../actions/task_actions'
import ShowList from "./show_list"

const mSTP = (state, ownProps) => {
  return {
    tasks: Object.values(state.entities.tasks),
    list: state.entities.lists[ownProps.match.params.listId]
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
    fetchList: (listId) => dispatch(fetchList(listId))
  };
};

export default connect(mSTP, mDTP)(ShowList);