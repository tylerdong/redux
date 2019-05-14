import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

/**
 * src/index.js入口文件
 * 创建一个Redux Store来存放应用中所有的state，应用只有一个store。
 * createStore有两个参数，分别是当前的state树和要处理的action，返回新的state
 * @type {any}
 */
const store = createStore(rootReducer)

/**
 * react-redux提供高阶组件Provider，Redux绑定到React。
 * Provider包裹App，让所有容器组件都可以访问store，
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
