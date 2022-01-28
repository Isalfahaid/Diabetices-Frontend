import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Component/App";
import Type1 from "./Component/Type1";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import Type2 from "./Component/Type2";
import Medicin from "./Component/Medicin";
import Technology from "./Component/Technology";
import ParticipateComDr from "./Component/ParticipateComDr"
import ComponentHome from "./Component/ComponentHome"
import "./index.css";
import Poste from "./Component/Poste";



ReactDOM.render(
  <BrowserRouter>
    <Routes>

       <Route path="/" element={<App />}>
        <Route path="firstpage" element={<ParticipateComDr />} />
        <Route path="type1" element={<Type1 />} />
        <Route path="Doctor" element={<ComponentHome />} />
        <Route path="Type2" element={<Type2 />} />
        <Route path="LogInPage" element={<Login />} />
        <Route path="Medicin" element={<Medicin />} />
        <Route path="Technology" element={<Technology />} />
        <Route path=":registrationId" element={<Registration />} />
        <Route path="post" element={<Poste />} />

      </Route>

    </Routes>
  </BrowserRouter>,
  
  document.getElementById("root")
);
