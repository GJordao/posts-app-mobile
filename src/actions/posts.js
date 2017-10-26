export const ADD_POST = "posts/ADD_POST";
export const EDIT_POST = "posts/EDIT_POST";
export const REMOVE_POST = "posts/REMOVE_POST";

export const addPost = post => {
    return {
        type: ADD_POST,
        payload: post
    };
};

export const editPost = (index, post) => {
    return {
        type: EDIT_POST,
        payload: { index, post }
    };
};

export const removePost = index => {
    return {
        type: REMOVE_POST,
        payload: index
    };
};
