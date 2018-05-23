import ajax from './helpers/ajaxHelper';
import {
    getMovieListUrl,
} from './urlHelper';

const fetchMovies = () => ajax.get(getMovieListUrl()).then((res) => {
    return res.data;
});

export {
    fetchMovies
};