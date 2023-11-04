import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import LoginPage from "views/examples/loginPage.js";
import FillFormPage from "views/examples/fill_form.js";
import LawerFillForm from "views/examples/fill_form_lawer.js";



  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(

      <BrowserRouter>
        <Routes>
          <Route path="/components" element={<Index />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/fill-form" element={<FillFormPage />} />
          <Route path="/fill-form-lawer" element={<LawerFillForm />} />
        </Routes>
      </BrowserRouter>
    );
  




