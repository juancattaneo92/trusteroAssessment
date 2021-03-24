import { connect } from "react-redux";
import EditTask from "./edit_task";
import { fetchTask, updateTask } from "../../actions/task_actions";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state,) => {
  // debugger
  return {
    tasks: Object.values(state.entities.tasks),
    task: state.entities.tasks[state.ui.modal.task]
  }
}

const mDTP = (dispatch) => {
  return ({
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    updateTask: (task) => dispatch(updateTask(task)),
    closeModal: () => dispatch(closeModal()),
  })
}

export default withRouter(connect(mSTP, mDTP)(EditTask))