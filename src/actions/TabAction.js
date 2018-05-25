import {fetchMovies, fetchTrendingMovies} from "../fetchers";


export const fetchAllMovies = () => {
    return (dispatch) => {
        fetchMovies().then((allMovies) => {
            dispatch({
                type: "FETCH_MOVIES",
                payload: allMovies
            });
        });
    };
};

export const fetchMoviesInTrends = () => {
    return (dispatch) => {
        fetchTrendingMovies().then((trendingMovies) => {
            dispatch({
                type: "FETCH_TRENDING_MOVIES",
                payload: trendingMovies
            })
        });
    }
};
