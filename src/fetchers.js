import ajax from './helpers/ajaxHelper';
import {
    getMovieListUrl,
    getTrendingMovieListUrl,
} from './urlHelper';

const fetchMovies = () => ajax.get(getMovieListUrl()).then((res) => {
    return res.data;
});

const fetchTrendingMovies = () => ajax.get(getTrendingMovieListUrl()).then((res) => {
    return res.data;
});

export {
    fetchMovies,
    fetchTrendingMovies
};