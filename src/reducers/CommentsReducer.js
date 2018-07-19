const initialState = {
    comments : null
};

export default (state= initialState, action) => {
    switch (action.type) {
        case "FETCH_COMMENTS":
            return {...state, comments: action.payload};
        default:
            return state;
    }
}