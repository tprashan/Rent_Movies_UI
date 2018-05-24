const initialState = {
    movies : null,
    trending: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_MOVIES":
            return {...state, movies: action.payload};
        case "FETCH_TRENDING_MOVIES":
            return {...state, trending: action.payload};
        default:
            return state;
    }

}