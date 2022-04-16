import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/inventario">
                  Inventario
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/volantes">
                  Volantes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/clientes">
                  Clientes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/proovedores">
                  Proovedores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/ventas">
                  Ventas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/historialcompras">
                  Historial de compras
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
