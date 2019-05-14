import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/**
 * 混合组件，表单和函数耦合在一起
 * @param dispatch
 * @returns {*}
 * @constructor
 */
const AddTodo = ({ dispatch }) => {
  // ref用法
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
