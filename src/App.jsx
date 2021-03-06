import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AppStyled } from "./App.styles";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import Home from "./pages/Home";
import Oracion from "./pages/Oracion";
import { ConsideracionList } from "./pages/Consideracion/ConsideracionList";
import { ConsideracionDia } from "./pages/Consideracion/ConsideracionDia";
import { GozosList } from "./pages/Gozos";
import { Villancico, VillancicosList } from "./pages/Villancicos";

function App() {
  return (
    <AppStyled>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/oracion/:name" element={<Oracion />} />
            <Route
              path="/consideracion"
              element={<ConsideracionList />}
              exact
            />
            <Route path="/consideracion/:dia" element={<ConsideracionDia />} />
            <Route path="/gozos" element={<GozosList />} />
            <Route path="/villancicos" element={<VillancicosList />} exact />
            <Route path="/villancicos/:name" element={<Villancico />} />
            <Route path="/configuracion" element={<Home />} exact />
            <Route path="*" element={<Home />} />
          </Routes>
        </Main>
      </Router>
    </AppStyled>
  );
}

export default App;
