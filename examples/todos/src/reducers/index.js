import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/**
 * combineReduceers把多个reducer创建成一个根reducer
 */
export default combineReducers({
  todos,
  visibilityFilter
})
