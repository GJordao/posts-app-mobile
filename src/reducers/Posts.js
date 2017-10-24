import { ADD_POST } from "./../actions/posts";

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
        default:
            return state;
    }
};
