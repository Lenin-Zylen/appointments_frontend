import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
  error: false,
  errorMsg: "",
  patients: [],
  apiSuccess: false,
};

export const AppointmentSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {
    getAllAppointmentSlice: (state, action) => {
      state.patients = action.payload;
      state.loader = false;
      return state;
    },
    addAppointmentSlice: (state, action) => {
      state.patients = [action.payload, ...state.patients];
      state.loader = false;
      state.apiSuccess = true;
      state.error = false;
      return state;
    },
    editAppointmentSlice: (state, action) => {
      state.patients = state.patients.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      state.loader = false;
      state.apiSuccess = true;
      state.error = false;
      return state;
    },
    resetAppointmentStateSlice: (state) => {
      state.patients = [];
      state.error = true;
      return state;
    },

    setLoaderTrue: (state) => {
      state.loader = true;
    },
    setPatientError: (state) => {
      state.error = true;
      state.loader = false;
      return state;
    },
    resetAppointmentError: (state) => {
      state.error = false;
      return state;
    },
    resetApiSuccess: (state) => {
      state.apiSuccess = false;
      return state;
    },
  },
});

export const { getAllAppointmentSlice, resetAppointmentStateSlice } = AppointmentSlice.actions;

export default AppointmentSlice.reducer;
