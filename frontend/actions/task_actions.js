import * as TaskAPIUtil from "../util/task_api_util";

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

const receiveTasks = tasks => {
  return ({
    type: RECEIVE_TASKS,
    tasks
  })
}

const receiveTask = task => {
  return ({
    type: RECEIVE_TASK,
    task
  })
}

const removeTask = taskId => {
  return ({
    type: REMOVE_TASK,
    taskId: taskId
  })
}

//Thunk actions

export const fetchTasks = () => dispatch => {
  return TaskAPIUtil.fetchTasks()
    .then(res => dispatch(receiveTasks(res)))
}

export const fetchTasksByListId = (listId) => dispatch => {
  return TaskAPIUtil.fetchTasksByListId(listId)
    .then(res => dispatch(receiveTasks(res)))
}

export const fetchTask = (taskId) => dispatch => {
  return TaskAPIUtil.fetchTask(taskId)
    .then(res => dispatch(receiveTask(res)))
}

export const createTask = (listId, task) => dispatch => {
  return TaskAPIUtil.createTask(listId, task)
    .then(res => dispatch(receiveTask(res)))
}

export const updateTask = (task) => dispatch => {
  return TaskAPIUtil.updateTask(task)
    .then(res => dispatch(receiveTask(res)))
}

export const deleteTask = (TaskId) => dispatch => {
  return TaskAPIUtil.deleteTask(TaskId)
    .then(() => dispatch(removeTask(TaskId)))
}