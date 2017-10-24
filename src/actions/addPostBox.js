export const SHOW_POST_BOX = "addPostBox/SHOW_POST_BOX";
export const HIDE_POST_BOX = "addPostBox/HIDE_POST_BOX";

export const showPostBox = () => {
    return {
        type: SHOW_POST_BOX
    };
};

export const hidePostBox = () => {
    return {
        type: HIDE_POST_BOX
    };
};
