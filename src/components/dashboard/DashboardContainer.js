import {connect} from "react-redux";
import {Dashboard} from "./Dashboard";
import {updateGenre, updateYear} from "../../actions/DashboardAction";


export const mapStateToProps = (state) => {
    return Object.assign({}, state.dashboardReducer)
};

export const mapDispatchToProps = (dispatch) => ({
    "updateGenre": (genre) => dispatch(updateGenre(genre)),
    "updateYear": (year) => dispatch(updateYear(year))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);