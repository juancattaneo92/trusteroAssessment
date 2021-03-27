import { connect } from "react-redux";
import { createTask } from "../../actions/task_actions";
import CreateTask from "./create_task";
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'


const mSTP = (state, ownProps) => {
  let locationArr = ownProps.location.pathname.split("/")
  let listId = locationArr[locationArr.length - 1]
  return ({
    listId: listId
  })
}

const mDTP = dispatch => {
  return ({
    createTask: (listId, task) => dispatch(createTask(listId, task)),
    closeModal: () => dispatch(closeModal()),
  })
}

export default withRouter(connect(mSTP, mDTP)(CreateTask));