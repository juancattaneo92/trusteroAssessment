import * as ListAPIUtil from "../util/list_api_util";

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

const receiveLists = lists => {
  return ({
    type: RECEIVE_LISTS,
    lists
  })
}

const receiveList = payload => {
  return ({
    type: RECEIVE_LIST,
    payload
  })
}

const removeList = listId => {
  return ({
    type: REMOVE_LIST,
    listId: listId
  })
}

//Thunk actions

export const fetchLists = () => dispatch => {
  return ListAPIUtil.fetchLists()
    .then( res => dispatch(receiveLists(res)))
}

export const fetchList = (listId) => dispatch => {
  return ListAPIUtil.fetchList(listId)
    .then( res => dispatch(receiveList(res)))
}

export const createList = () => dispatch => {
  return ListAPIUtil.createList()
    .then( res => dispatch(receiveList(res)))
}

export const updateList = (list) => dispatch => {
  return ListAPIUtil.updateList(list)
    .then( res => dispatch(receiveList(res)))
}

export const deleteList = (listId) => dispatch => {
  return ListAPIUtil.deleteList(listId)
    .then( () => dispatch(removeList(listId)))
}