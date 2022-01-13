import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import Routes from './main/routes'
import reportWebVitals from './reportWebVitals';

import reducer from './main/reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducer, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('app')
)

reportWebVitals();
