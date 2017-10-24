import { SHOW_POST_BOX, HIDE_POST_BOX } from "./../actions/addPostBox";

const defaultState = {
    visible: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_POST_BOX: {
            return Object.assign({}, state, { visible: true });
        }
        case HIDE_POST_BOX: {
            return Object.assign({}, state, { visible: false });
        }
        default:
            return state;
    }
};
