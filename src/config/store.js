// Redux
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
// Reducers
import AddPostBox from "./../reducers/AddPostBox";
import Posts from "./../reducers/Posts";

const reducers = combineReducers({
    addPostBox: AddPostBox,
    posts: Posts
});

const middleware = () => {
    return applyMiddleware(thunkMiddleware);
};

export default createStore(reducers, middleware());
