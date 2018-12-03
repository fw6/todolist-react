import * as types from './actionTypes'
// import Axios from 'axios'

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

// export const getTodoList = () => {
//   return dispatch => {
//     Axios.get('/api/todolist')
//       .then(res => {
//         dispatch(initListAction(res.data))
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// }

export const getInitList = () => ({
  type: types.GET_INIT_LIST
})
