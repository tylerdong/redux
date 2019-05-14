import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

/**
 * 展示组件，用于显示Todo列表
 * @param todos 以{text， complete}形式显示的todo项数组
 * @param toggleTodo 当todo项被点击时调用的回调函数
 * @returns {*}
 * @constructor
 */
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
