import {connect} from "react-redux";
import Comments from "./Comments";
import {fetchAllComments} from "../../actions/CommentsAction";
import {bindActionCreators} from "redux";


export const mapStateToProps = (state) => {
    return Object.assign({}, state.commentsReducer)
};

export const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                fetchAllComments
            }
            , dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);