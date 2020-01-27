import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import {startGetUsers} from './actions/users'
import {startGetPosts} from './actions/posts'

const store = configureStore()
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())

console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));