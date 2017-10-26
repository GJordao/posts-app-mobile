import { ADD_POST, EDIT_POST, REMOVE_POST } from "./../actions/posts";

const defaultState = {
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPosts = state.list.slice();
            newPosts.push(action.payload);
            return Object.assign({}, state, { list: newPosts });
        }
        case EDIT_POST: {
            const newPosts = state.list.slice();
            newPosts[action.payload.index] = action.payload.post;
            return Object.assign({}, state, { list: newPosts });
        }
        case REMOVE_POST: {
            const newPosts = state.list.slice();
            newPosts.splice(action.payload, 1);    
            return Object.assign({}, state, { list: newPosts });
        }
        default:
            return state;
    }
};
