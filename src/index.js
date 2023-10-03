import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archive from "./pages/Archive";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="archive" element={<Archive />} />
  </Routes>
</BrowserRouter>

);
