import { combineReducers } from "redux";
import userSlice from "./user";
import customersSlice from "./customers";
import usersSlice from "./users";
import schedulerSlice from "./scheduler";

export default combineReducers({
    customers: customersSlice.reducer,
    scheduler: schedulerSlice.reducer,
    user: userSlice.reducer,
    users: usersSlice.reducer,
})