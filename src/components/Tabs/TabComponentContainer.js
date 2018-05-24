import {connect} from "react-redux";
import {TabComponent} from "./TabComponent";
import {fetchAllMovies, fetchMoviesInTrends} from "../../actions/TabAction";
import {bindActionCreators} from "redux";


export const mapStateToProps = (state) => {
    return Object.assign({}, state.tabReducer)
};

export const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                fetchAllMovies,
                fetchMoviesInTrends
            }
            , dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabComponent);