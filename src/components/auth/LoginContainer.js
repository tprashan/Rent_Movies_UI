import {connect} from "react-redux";
import Login from "./Login";
import {loginUser} from "../../actions/AuthAction";
import {bindActionCreators} from "redux";

export const mapStateToProps = (state) => {
    return Object.assign({}, state.loginReducer)
};

export const mapDispatchToProps = (dispatch, props) => {
    console.log(props,"props")
    return {
        actions: bindActionCreators(
            {
                loginUser
            }
            , dispatch
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);