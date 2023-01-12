import React from "react";
import { Routes, Route } from "react-router-dom";
//import Home from "../pages/Home/Home";
import AppointmentsList from "../pages/Appointments/AppointmentsList/AppointmentsList";
import CreateAppointment from "../pages/Appointments/CreateAppointment/CreateAppointment";
import EditAppointment from "../pages/Appointments/EditAppointment/EditAppointment";

const Routing = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppointmentsList />} />
        <Route path="/appointment" element={<AppointmentsList />} />
        <Route path="/appointment/create" element={<CreateAppointment />} />
        <Route path="/appointment/edit" element={<EditAppointment />} />
     

        {/* Protected routes */}

        {/* Wildcard route */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
};

export default Routing;
