const initialState = {
    status : null
};

export default (state= initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {...state, status: action.payload};
        default:
            return state;
    }
}