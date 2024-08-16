import { combineReducers } from "redux";
import userSlice from "./user";
import customersSlice from "./customers";

export default combineReducers({
    user: userSlice.reducer,
    customers: customersSlice.reducer,
})