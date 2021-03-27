import { connect } from "react-redux";
import EditComment from "./edit_comment";
import { fetchComment, updateComment } from "../../actions/comment_actions";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  let commentId = ownProps.comment;
  return {
    comments: Object.values(state.entities.comments),
    comment: state.entities.comments[state.ui.modal.comment],
    commentId: commentId
  }
}

const mDTP = (dispatch) => {
  return ({
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    closeModal: () => dispatch(closeModal()),
  })
}

export default withRouter(connect(mSTP, mDTP)(EditComment))