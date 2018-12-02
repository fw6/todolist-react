import * as types from './actionTypes'

const defaultState = {
  inputValue: 'GouDan',
  list: []
}

// reducer可以接受state，但绝不可修改state
export default (state = defaultState, action) => {
  if (action.type === types.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))

    newState.inputValue = action.value

    return newState
  } else if (action.type === types.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))

    if (!newState.inputValue) {
      newState.inputValue = '请认真填写一下咯🌚'
    } else {
      newState.list.unshift(newState.inputValue)
      newState.inputValue = ''
    }

    return newState
  } else if (action.type === types.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))

    newState.list.splice(action.index, 1)

    return newState
  } else if (action.type === types.INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }

  return state
}
