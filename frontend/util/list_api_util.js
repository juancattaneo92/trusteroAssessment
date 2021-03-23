export const fetchLists = () => {
  return $.ajax({
    url: `/api/lists`,
    method: "GET",
  })
}
export const fetchList = (listId) => {
  return $.ajax({
    url: `/api/lists/${listId}`,
    method: "GET",
  })
}
export const createList = () => {
  return $.ajax({
    url: `/api/lists`,
    method: "POST",
  })
}
export const updateList = (list) => {
  return $.ajax({
    url: `/api/lists/${list.id}`,
    method: "PATCH",
    data: { list },
  })
}
export const deleteList = listId => {
  return $.ajax({
    url: `/api/lists/${listId}`,
    method: "DELETE"
  })
}