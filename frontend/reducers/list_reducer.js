import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions";

const listsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists
    case RECEIVE_LIST:
      // return Object.assign(newState, action.list)
      newState[action.list.id] = action.list
      return newState
    case REMOVE_LIST:
      delete newState[action.listId]
      return newState
    default:
      return state  
  }
}

export default listsReducer;