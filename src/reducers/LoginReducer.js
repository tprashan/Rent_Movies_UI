const initialState = {
    isAuthenticated : false
};

export default (state= initialState, action) => {
    console.log(action,"action");
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, isAuthenticated: action.payload};
        default:
            return state;
    }
}