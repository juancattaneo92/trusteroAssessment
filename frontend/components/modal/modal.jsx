import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewFormContainer from '../reviews/create_review_form_container';
import EditReviewFormContainer from "../reviews/edit_review_container";
import PopUpThanks from '../popup_thanks';

function Modal({ modal, closeModal, clearErrors }) {

  if (!modal) {
    return null;
  }

  let component;
  if (modal["modal-type"] && modal["comment"]) {
    let editModal = modal;
    switch (modal) {
      case editModal:
        component = <EditCommentFormContainer review={modal["comment"]} />;
        break;
      default:
        return null;
    }
  } else {
    switch (modal) {
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