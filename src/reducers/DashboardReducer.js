const initialState = {
    genre: "All",
    year: "All",
    showDetailPage: false,
    movieDescriptions: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE_GENRE":
            return {...state, genre: action.payload};
        case "UPDATE_YEAR":
            return {...state, year: action.payload};
        case "CHANGE_DASHBOARD":
            return {...state, showDetailPage: action.payload};
        case "SET_DESCRIPTION":
            return {...state, movieDescriptions: action.payload};
        default:
            return state;
    }

}