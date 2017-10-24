// Redux
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
// Reducers
import AddPostBox from "./../reducers/AddPostBox";

const reducers = combineReducers({
    addPostBox: AddPostBox
});

const middleware = () => {
    return applyMiddleware(thunkMiddleware);
};

export default createStore(reducers, middleware());
