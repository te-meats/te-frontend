import { combineReducers } from "redux";
import userSlice from "./user";
import customersSlice from "./customers";
import usersSlice from "./users";
import schedulerSlice from "./scheduler";

import producersSlice from "./producers";
import weightStationSlice from "./weightStation";

export default combineReducers({
    customers: customersSlice.reducer,
    producers: producersSlice.reducer,
    weightStation: weightStationSlice.reducer,
    scheduler: schedulerSlice.reducer,
    user: userSlice.reducer,
    users: usersSlice.reducer,
})