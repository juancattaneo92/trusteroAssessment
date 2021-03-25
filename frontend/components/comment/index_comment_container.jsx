import { connect } from 'react-redux';
import IndexComment from "./index_comment";
import { fetchCommentsByTaskId, deleteComment} from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
    comments: Object.values(state.entities.comments),
    taskId: ownProps.match.params.taskId
  })
}


const mDTP = dispatch => {
  return ({
    fetchCommentsByTaskId: (taskId) => dispatch(fetchCommentsByTaskId(taskId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    openModal: (payload) => { dispatch(openModal(payload)) }
  })
}
export default withRouter(connect(mSTP, mDTP)(IndexComment));