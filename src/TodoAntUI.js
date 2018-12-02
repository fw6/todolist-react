import React from 'react'
import { Input, Button, List } from 'antd'
import * as actions from './store/actionCreators'
import store from './store/'

// 无状态组件 UI组件
export default function TodoAntUI(props) {
  return (
    <>
      <h1>TodoAnt</h1>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        size="large"
        style={{ width: 300, marginLeft: 10, marginRight: 10 }}
        onChange={e =>
          store.dispatch(actions.getInputChangeAction(e.target.value))
        }
      />
      <Button
        type="primary"
        size="large"
        onClick={() => store.dispatch(actions.addTodoItemAction())}
      >
        提交
      </Button>
      <List
        style={{ marginTop: 10, marginLeft: 10, width: 300 }}
        // header={<div>header</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => store.dispatch(actions.deleteTodoItemAction(index))}
          >
            {item}
          </List.Item>
        )}
        // footer={<div>footer</div>}
      />
    </>
  )
}
