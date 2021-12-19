import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  NavStyled,
  NavWrapperStyled,
  NavToggleStyled,
  NavBrandStyled,
  MenuListStyled,
  MenuItemStyled,
} from "./Navbar.styles";

import BarsSVG from "./BarsSVG";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const routes = [
    { path: "/", title: "Inicio" },
    { path: "/oracion/todos-los-dias", title: "Oración para todos los días" },
    { path: "/consideracion", title: "Consideraciones" },
    {
      path: "/oracion/santisima-virgen",
      title: "Oración a la santísima vírgen",
    },
    { path: "/oracion/san-jose", title: "Oración a san José" },
    { path: "/gozos", title: "Gozos navideños" },
    { path: "/oracion/nino-jesus", title: "Oración niño jesus" },
    { path: "/villancicos", title: "Villancicos" },
    { path: "/configuracion", title: "Configuración" },
  ];

  return (
    <NavStyled>
      <NavWrapperStyled>
        <NavToggleStyled
          role="button"
          onClick={() => setMenuActive(!menuActive)}
        >
          <BarsSVG />
        </NavToggleStyled>
        <NavBrandStyled>Novena Aguinaldos</NavBrandStyled>
        <MenuListStyled active={menuActive}>
          {routes.map((route) => (
            <MenuItemStyled key={route.title}>
              <NavLink to={route.path} onClick={()=>setMenuActive(false)}>{route.title}</NavLink>
            </MenuItemStyled>
          ))}
        </MenuListStyled>
      </NavWrapperStyled>
    </NavStyled>
  );
}

export default Navbar;
