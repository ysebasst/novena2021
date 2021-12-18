import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const routes = [
    "Inicio",
    "Oración para todos los días",
    "Consideraciones",
    "Oración a la santisima vírgen",
    "Oración a san José",
    "Gozos navideños",
    "Oración niño jesus",
    "Villancicos",
    "Configuración",
  ];

  const normalizeRoute = (route) => {
    if (route === "Inicio") {
      return "";
    }
    return route
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, "-");
  };

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <div
          className="nav__toggle"
          role="button"
          onClick={() => setMenuActive(!menuActive)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>
        <h1 className="nav__brand">Novena Aguinaldos</h1>
        <ul
          className={
            "nav__menu nav-menu" + (menuActive ? " nav-menu--active" : "")
          }
        >
          {routes.map((route) => (
            <li className="nav-menu__item" key={route}>
              <NavLink to={`/${normalizeRoute(route)}`}>{route}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
