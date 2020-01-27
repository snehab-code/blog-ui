import {createStore, combineReducers, applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducer'
import commentsReducer from '../reducers/commentsReducer'
import postsReducer from '../reducers/postsReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        comments: commentsReducer,
        posts: postsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore