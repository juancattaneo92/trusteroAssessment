import { connect } from "react-redux";
import CreateComment from "./create_comment";
import { createComment } from "../../actions/comment_actions";
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'


const mSTP = (state, ownProps) => {
  // debugger
  let locationArr = ownProps.location.pathname.split("/")
  let taskId = locationArr[locationArr.length - 1]
  return ({
        taskId: taskId
  })
}

const mDTP = dispatch => {
  return ({
    createComment: (taskId, comment) => dispatch(createComment(taskId, comment)),
    closeModal: () => dispatch(closeModal()),
  })
}

export default withRouter(connect(mSTP, mDTP)(CreateComment));