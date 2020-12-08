import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './UserReducers';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});