
import { combineReducers } from 'redux';
import listsReducer from './list_reducer';
import tasksReducer from './task_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  lists: listsReducer,
  tasks: tasksReducer,
  comments: commentsReducer,
});

export default entitiesReducer;