import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./Public";
import { Home } from "pages/index";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
