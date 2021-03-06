import {connect} from "react-redux";
import Registration from "./Registration";
import {signUpUser} from "../../actions/AuthAction";
import {bindActionCreators} from "redux";

export const mapStateToProps = (state) => {
    return Object.assign({}, state.registrationReducer)
};

export const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                signUpUser
            }
            , dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);