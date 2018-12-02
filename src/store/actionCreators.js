import * as types from './actionTypes'

export const getInputChangeAction = value => ({
  type: types.CHANGE_INPUT_VALUE,
  value
})

export const addTodoItemAction = () => ({
  type: types.ADD_TODO_ITEM
})

export const deleteTodoItemAction = index => ({
  type: types.DELETE_TODO_ITEM,
  index
})

export const initListAction = data => ({
  type: types.INIT_LIST,
  data
})
