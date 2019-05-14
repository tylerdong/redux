import React from 'react'
import PropTypes from 'prop-types'

/**
 * 展示组件,一个todo项。这里使用普通函数式无关状态组件。如果需要本地state，生命周期方法或者性能优化，完全可以转化成class
 * @param onClick todo项被点击时调用的回调函数
 * @param completed todo项是否显示删除线
 * @param text 显示的文本内容
 * @returns {*}
 * @constructor
 */
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
