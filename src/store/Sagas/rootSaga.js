import { all } from "redux-saga/effects";
import { watchAppointmentSaga } from "./appointmentSaga";

export function* watcherSaga() {
  yield all([watchAppointmentSaga()]);
}
