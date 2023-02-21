import { Route, Routes } from "react-router-dom";
import { Booking, Login, NotFoundPage } from "../../pages";
import React from "react";
import { paths } from "./paths";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.main()} element={<Login />} />
      <Route path={paths.booking()} element={<Booking />} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};
