import { connect } from "react-redux";
import { createTask } from "../../actions/task_actions";
import CreateTask from "./create_task";
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'
// import { fetchList } from '../../actions/list_actions'


const mSTP = (state, ownProps) => {
  // debugger
  let locationArr = ownProps.location.pathname.split("/")
  let listId = locationArr[locationArr.length - 1]
  return ({
    // listId: Object.keys(state.entities.lists)[state.ui.modal.list]
    listId: listId
    // listId: Object.keys(state.entities.lists)[0]
  })
}

const mDTP = dispatch => {
  return ({
    createTask: (listId, task) => dispatch(createTask(listId, task)),
    closeModal: () => dispatch(closeModal()),
    // fetchList: (listId) => dispatch(fetchList(listId))
  })
}

export default withRouter(connect(mSTP, mDTP)(CreateTask));