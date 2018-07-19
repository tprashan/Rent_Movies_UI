import ajax from './helpers/ajaxHelper';
import {
    getMovieListUrl,
    getTrendingMovieListUrl,
    getCommentsUrl,
    getSignUpUrl,
} from './urlHelper';

const fetchMovies = () => ajax.get(getMovieListUrl()).then((res) => {
    return res.data;
});

const fetchTrendingMovies = () => ajax.get(getTrendingMovieListUrl()).then((res) => {
    return res.data;
});

const fetchComments = () => ajax.get(getCommentsUrl()).then((res) => {
    return res.data;
});

const signUp = (data) => ajax.post(getSignUpUrl(), data).then((res) => {
    return res.data;
});

export {
    fetchMovies,
    fetchTrendingMovies,
    fetchComments,
    signUp,
};