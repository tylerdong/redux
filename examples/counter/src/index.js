import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

/**
 * 属性可以是函数onIncrement， onDecrement
 * store.getState()方法返回当前state树
 * store.dispatch分发action，这是触发state变化的唯一方法，dispatch的参数是描述应用变化的普通对象，按照约定action应该有type字段表示它的类型。
 * @returns {*|*|*}
 */
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
// 注册监听器
store.subscribe(render)
