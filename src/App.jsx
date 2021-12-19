import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AppStyled } from "./App.styles";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import Home from "./pages/Home";
import Oracion from "./pages/Oracion";

function App() {
  return (
    <AppStyled>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/oracion/:name" element={<Oracion />} />
            <Route path="/consideracion/:dia" element={<Home />} />
            <Route path="/gozos" element={<Home />} />
            <Route path="/villancicos" element={<Home />} exact />
            <Route path="/villancicos/:name" element={<Home />} />
            <Route path="/configuracion" element={<Home />} exact />
            <Route path="*" element={<Home />} />
          </Routes>
        </Main>
      </Router>
    </AppStyled>
  );
}

export default App;
