import { put, takeEvery } from "redux-saga/effects";
import { getAppointmentAPI } from "../../apis";
import {
    getAllAppointmentSlice,
    resetAppointmentStateSlice,
} from "../Slices/AppointmentSlice";
import { GET_ALL_APPOINTMENTS, CREATE_APPOINTMENT, EDIT_APPOINTMENTS } from "../Types";
import { toast } from "react-toastify";

export function* getAppointmentsSaga() {
  try {
    const clients = yield getAppointmentAPI();
    yield put(getAllAppointmentSlice(clients.data));
  } catch (error) {
    console.error(error);
    if (typeof error.response.data.messages === "object") {
      yield put(resetAppointmentStateSlice());
      error.response.data.messages.map((item) => {
        return toast.error(`${item.message} `);
      });
    } else if (
      typeof error.response.data.message === "undefined" ||
      typeof error.response.data === "undefined"
    ) {
      toast.error(error.message);
      yield put(resetAppointmentStateSlice());
    }
    toast.error(error.response.data.message);
    yield put(resetAppointmentStateSlice());
  }
}

export function* watchAppointmentSaga() {
  yield takeEvery(GET_ALL_APPOINTMENTS, getAppointmentsSaga);
}

