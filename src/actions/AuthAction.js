import {signUp, login} from "../fetchers";

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

export const loginUser = (data) => {
    return (dispatch) => {
        login(data).then((status) => {
            dispatch({
                type: "LOGIN_USER",
                payload: status
            });
        });
    };
};