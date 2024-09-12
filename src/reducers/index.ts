import { combineReducers } from "redux";
import userSlice from "./user";
import customersSlice from "./customers";
import usersSlice from "./users";
import producersSlice from "./producers";
import weightStationSlice from "./weightStation";

export default combineReducers({
    customers: customersSlice.reducer,
    producers: producersSlice.reducer,
    weightStation: weightStationSlice.reducer,
    user: userSlice.reducer,
    users: usersSlice.reducer,
})