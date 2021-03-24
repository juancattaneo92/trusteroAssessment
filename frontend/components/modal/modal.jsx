import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ListFormContainer from '../list/create_list_form_container';
import TaskFormContainer from '../task/create_task_form_container';
import CommentFormContainer from '../comment/create_comment_form_container';
import EditListContainer from '../list/edit_list_container';
import EditTaskContainer from '../task/edit_task_container';
import EditCommentContainer from '../comment/edit_comment_container';

function Modal({ modal, closeModal, clearErrors }) {

  if (!modal) {
    return null;
  }

  let component;
  if (modal["modal-type"] && modal["list"]) {
    let editModal = modal;
    switch (modal) {
      case editModal:
        component = <EditListContainer listId={modal["list"]} modal-type={modal["modal-type"]} />;
        break;
      default:
        return null;
    }
  } else if (modal["modal-type"] && modal["task"]) {
    let editModal = modal;
    switch (modal) {
      case editModal:
        component = <EditTaskContainer task={modal["task"]} modal-type={modal["edit-task"]} />;
        break;
      default:
        return null;
    }
   } else if (modal["modal-type"] && modal["comment"]) {
      let editModal = modal;
      switch (modal) {
        case editModal:
          component = <EditCommentContainer comment={modal["comment"]} modal-type={modal["edit-comment"]} />;
          break;
        default:
          return null;
      }
  }else {
    switch (modal) {
      case "create-list":
        component = <ListFormContainer />;
        break;
      case "create-task":
        component = <TaskFormContainer />;
        break;
      case "create-comment":
        component = <CommentFormContainer />;
        break;
      default:
        return null;
    }
  }

  return (
    <div className="modal-background" onClick={closeModal} onChange={clearErrors} >
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => { dispatch(closeModal()) }
  }
};

export default connect(mSTP, mDTP)(Modal);