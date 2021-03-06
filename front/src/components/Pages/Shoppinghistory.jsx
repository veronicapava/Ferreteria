import { useState, useEffect } from "react"
import Header from "../Header"
import fetchApi from "../../utils/useFetch"

const Shoppinghistory = () => {
  const [compras, setCompras] = useState([])

  useEffect(() => {
    async function fetchingVentas() {
      let compras = await fetchApi("/transaccion/obtenercompras")
      setCompras(compras)
    }
    fetchingVentas()
  }, [])

  return (
    <div className="container mt-5">
      <Header />
      <h3 className="mb-3">Historial de compras</h3>
      <div>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th>ID compra</th>
              <th>Articulo</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          {compras.map((compra) => (
            <tbody>
              <tr className="table-secondary">
                <th>{compra.id}</th>
                <th>{compra.articulo.nombreProducto}</th>
                <th>{compra.cantidad}</th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}

export default Shoppinghistory
