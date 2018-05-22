import ajax from './helpers/ajaxHelper';
import {
    getMovieListUrl,
} from './urlHelper';

const fetchKviStatusCard = () => ajax.get(getMovieListUrl()).then((res) => {
    return res.data;
});

export {
    fetchKviStatusCard
};