 
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/customcss.css";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import Contact from "./Components/Contact";
import {  Route, Routes } from "react-router-dom";
import OncampusProgram from "./Components/OncampusProgram";
import AuditAssurance from "./Components/AuditAssurance";
import CrashCourse from "./Components/CrashCourse";
import HomePage from "./Components/Homepage";
import Taxation from "./Components/Taxation";
import InternationalTransections from "./Components/InternationalTransections";
import ManagementConsultancy from "./Components/ManagementConsultancy";
import NewBusinessSupport from "./Components/NewBusinessSupport";
import BusinessSupport from "./Components/BusinessSupport";
import WhoWeAre from "./Components/WhoWeAre";
import WhoWeServe from "./Components/WhoWeServe";
import WhatWeDo from "./Components/WhatWeDo";
import Careers from "./Components/Careers";
import "./i18n";

const root = createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/OncampusProgram" element={<OncampusProgram />} />
      <Route path="/CrashCourse" element={<CrashCourse />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AuditAssurance" element={<AuditAssurance />} />
      <Route path="/Taxation" element={<Taxation />} />
      <Route path="/BusinessSupport" element={<BusinessSupport />} />
      <Route
        path="/ManagementConsultancy"
        element={<ManagementConsultancy />}
      />
      <Route
        path="/InternationalTransections"
        element={<InternationalTransections />}
      />
      <Route path="/NewBusinessSupport" element={<NewBusinessSupport />} />
      <Route path="/WhatWeDo" element={<WhatWeDo />} />
      <Route path="/WhoWeServe" element={<WhoWeServe />} />
      <Route path="/WhoWeAre" element={<WhoWeAre />} />
      <Route path="/Careers" element={<Careers />} />
    </Routes>
  </HashRouter>
);
