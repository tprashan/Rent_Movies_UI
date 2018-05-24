const initialState = {
    genre: "All",
    year: "All",
};

export default (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE_GENRE":
            return {...state, genre: action.payload};
        case "UPDATE_YEAR":
            return {...state, year: action.payload};
        default:
            return state;
    }

}