import {fetchComments} from "../fetchers";

export const fetchAllComments = () => {
    return (dispatch) => {
        fetchComments().then((comments) => {
            dispatch({
                type: "FETCH_COMMENTS",
                payload: comments
            });
        });
    };
};