import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.content !== this.props.content) return true
    else return false
  }

  render() {
    return (
      <li
        onClick={() => this.props.onClick()}
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      />
    )
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

// 设置默认值
// TodoItem.defaultProps = {
//   content: 'hello, world'
// }
export default TodoItem
