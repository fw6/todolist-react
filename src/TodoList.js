import React from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '接下来要做些什么呢？💭',
      list: []
    }
  }

  handleInputChange(e) {
    const value = this.inp.value
    this.setState(() => ({ inputValue: value }))
  }

  handleBtnClick() {
    if (!this.state.inputValue) {
      this.setState(() => ({ inputValue: '不要空白呐！😜' }))
      return
    }
    this.setState(prevState => ({
      list: [prevState.inputValue, ...prevState.list],
      inputValue: ''
    }))
  }

  handleItemDelete(itemIndex) {
    this.setState(prevState => {
      const list = [...prevState.list]
      list.splice(itemIndex, 1)
      return { list }
    })
  }

  getTodoItem() {
    return this.state.list.map((item, index) => (
      <TodoItem
        onClick={() => this.handleItemDelete(index)}
        content={item}
        key={index}
      />
    ))
  }

  componentDidMount() {
    axios
      .get('/api/todolist')
      .then(res => {
        console.log(res.data)
        this.setState(() => ({
          list: [...res.data]
        }))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <div>
          <label htmlFor="insert-area">输入内容</label>
          <input
            id="insert-area"
            className="input"
            ref={inp => {
              this.inp = inp
            }}
            onChange={this.handleInputChange.bind(this)}
            value={this.state.inputValue}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </>
    )
  }
}

export default TodoList
