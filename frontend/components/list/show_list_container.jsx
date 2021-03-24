import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from "../../actions/modal_actions";


const mSTP = (state) => {
  return {
    lists: Object.values(state.entities.lists),
  };
};

const mDTP = (dispatch) => {
  return {
    openModal: (payload) => dispatch(openModal(payload)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(ShowList);