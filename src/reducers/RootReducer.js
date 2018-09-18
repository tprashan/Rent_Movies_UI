import { combineReducers } from 'redux-loop';
import dashboardReducer from "./DashboardReducer";
import tabReducer from "./TabReducer";
import commentsReducer from "./CommentsReducer";
import registrationReducer from "./RegistrationReducer";
import loginReducer from "./LoginReducer";

export default combineReducers({
    dashboardReducer,
    tabReducer,
    commentsReducer,
    registrationReducer,
    loginReducer,
});
