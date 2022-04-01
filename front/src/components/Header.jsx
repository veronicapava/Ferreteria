import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/inventario">Inventario</Link>
          </li>
          <li>
            <Link to="/volantes">Volantes</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/proovedores">Proovedores</Link>
          </li>
          <li>
            <Link to="/ventas">Ventas</Link>
          </li>
          <li>
            <Link to="/historialcompras">Historial de compras</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
