import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from "../actions/task_actions";

const tasksReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks
    case RECEIVE_TASK:
      newState[action.task.id] = action.task
      return newState
    case REMOVE_TASK:
      delete newState[action.taskId]
      return newState
    default:
      return state
  }
}

export default tasksReducer;