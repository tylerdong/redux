import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

/**
 * 容器组件 根据当前显示的状态来对todo列表进行过滤并渲染TodoList。
 * @param todos
 * @param filter
 * @returns {*}
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

/**
 * 定义mapStateToProps函数把state中的数据映射到展示组件的props中。
 * 可以使用reselect来计算衍生数据
 * @param state
 * @returns {{todos: *}}
 */
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

/**
 * 分发action，接受disptch()方法，并返回期望注入到展示组件的props中的回调方法。
 * 这里希望VisibleTodoList向TodoList组件中注入一个叫onTodoClick的props，还希望onTodoClick能分发
 * TOGGLE_TODO这个action
 * @param dispatch
 * @returns {{toggleTodo: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

/**
 * 使用connect()创建visibleTodoList，传入mapStateToProps和mapDispatchProps
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
