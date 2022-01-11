import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './main/app'
import reducer from './main/reducers'
import promise from 'redux-promise'
const store = applyMiddleware(promise)(createStore)(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)