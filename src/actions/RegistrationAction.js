import {signUp} from "../fetchers";

export const signUpUser = (data) => {
    return (dispatch) => {
        signUp(data).then((status) => {
            dispatch({
                type: "ADD_USER",
                payload: status
            });
        });
    };
};