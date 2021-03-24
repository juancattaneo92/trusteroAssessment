import { connect } from "react-redux";
import { createTask } from "../../actions/task_actions";
import CreateTask from "./create_task";
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state) => {
  return ({
  
  })
}

const mDTP = dispatch => {
  return ({
    createTask: (task) => dispatch(createList(task)),
    closeModal: () => dispatch(closeModal()),
  })
}

export default connect(mSTP, mDTP)(CreateTask)