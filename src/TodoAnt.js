import React from 'react'
import 'antd/dist/antd.css'
import store from './store/'
// import * as types from './store/actionTypes'
import TodoAntUI from './TodoAntUI'
import axios from 'axios'
import * as actions from './store/actionCreators'

class TodoAnt extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    store.subscribe(() => {
      this.setState(() => store.getState())
    })
  }

  // handleInputChange(e) {
  //   const action = {
  //     type: types.CHANGE_INPUT_VALUE,
  //     value: e.target.value
  //   }
  //   store.dispatch(action)
  // }

  // handleButtonClick() {
  //   const action = {
  //     type: types.ADD_TODO_ITEM
  //   }
  //   store.dispatch(action)
  // }

  // handleItemDelete(index) {
  //   const action = {
  //     type: types.DELETE_TODO_ITEM,
  //     index
  //   }
  //   store.dispatch(action)
  // }

  componentDidMount() {
    axios
      .get('api/todolist')
      .then(res => {
        const data = res.data
        const action = actions.initListAction(data)
        store.dispatch(action)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <TodoAntUI inputValue={this.state.inputValue} list={this.state.list} />
    )
  }
}

export default TodoAnt
