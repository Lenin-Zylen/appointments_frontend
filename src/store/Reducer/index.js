import { combineReducers } from "redux";
import AppointmentReducer from "../Slices/AppointmentSlice";

export const rootReducer = combineReducers({
  AppointmentReducer,
});