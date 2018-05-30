import { combineReducers } from 'redux-loop';
import dashboardReducer from "./DashboardReducer";
import tabReducer from "./TabReducer";

export default combineReducers({
    dashboardReducer,
    tabReducer
});
