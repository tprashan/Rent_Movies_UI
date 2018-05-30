import {connect} from "react-redux";
import {Dashboard} from "./Dashboard";
import {changeDashboard, setDescriptionOfMovie, updateGenre, updateYear} from "../../actions/DashboardAction";


export const mapStateToProps = (state) => {
    return Object.assign({}, state.dashboardReducer)
};

export const mapDispatchToProps = (dispatch) => ({
    updateGenre: (genre) => dispatch(updateGenre(genre)),
    updateYear: (year) => dispatch(updateYear(year)),
    changeDashboard: (showDetailPage) => dispatch(changeDashboard(showDetailPage)),
    setDescription: (movie) => dispatch(setDescriptionOfMovie(movie)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);