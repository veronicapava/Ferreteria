import { useState } from "react"
import fetchApi from "../../utils/useFetch"

const Article = ({ item }) => {
  const [editando, setEditando] = useState(false)
  const [temporal, setTemporal] = useState({})

  const guardar = async () => {
    await fetchApi(`/inventario/actualizar/${item.id}`, "PUT", temporal)
    setEditando(false)
    item = { ...temporal, id: item.id }
  }
  const borrarItem = async () => {
    await fetchApi(`/inventario/eliminar/${item.id}`, "DELETE")
    item = {}
  }
  const cancelar = () => {
    setEditando(false)
    setTemporal({})
  }

  return (
    <>
      {!editando ? (
        <div className="container">
          <div className="card-group mt-3">
            <div className="row">
              <article className="card border-info mb-3" style={{ width: "20rem", display: "flex" }}>
                <div className="card-body">
                  <h5>Producto: {item.nombreProducto}</h5>
                  <h5>Precio unidad: {item.precioUnd}</h5>
                  <h5>Cantidad en bodega: {item.cantidadEnBodega}</h5>
                  <h5>Cantidad máxima: {item.cantidadMax}</h5>
                  <h5>Cantidad mínima: {item.cantidadMin}</h5>
                </div>
                <button onClick={() => setEditando(true)} className="btn btn-outline-primary">
                  Editar
                </button>
                <button onClick={() => borrarItem()} className="btn btn-outline-danger">
                  Eliminar
                </button>
              </article>
            </div>
          </div>
        </div>
      ) : (
        <article className="card border-info mt-3 mb-3" style={{ width: "20rem", display: "flex" }}>
          <div className="card-body">
            <input
              type="text"
              placeholder="Nuevo nombre producto"
              required
              onChange={(e) => setTemporal({ ...temporal, nombreProducto: e.target.value })}
              className="form-control"
            />
            <p>Producto: {item.nombreProducto}</p>

            <input
              type="text"
              required
              placeholder="Nuevo precio unidad"
              onChange={(e) => setTemporal({ ...temporal, precioUnd: e.target.value })}
              className="form-control"
            />
            <p>Precio unidad: {item.precioUnd}</p>

            <input
              type="text"
              required
              placeholder="Nueva cantidad en bodega"
              onChange={(e) => setTemporal({ ...temporal, cantidadEnBodega: e.target.value })}
              className="form-control"
            />
            <p>Cantidad en bodega: {item.cantidadEnBodega}</p>

            <input
              type="text"
              required
              placeholder="Nueva cantidad max"
              onChange={(e) => setTemporal({ ...temporal, cantidadMax: e.target.value })}
              className="form-control"
            />
            <p>Cantidad máxima: {item.cantidadMax}</p>

            <input
              type="text"
              required
              placeholder="Nueva cantidad min"
              onChange={(e) => setTemporal({ ...temporal, cantidadMin: e.target.value })}
              className="form-control"
            />
            <p>Cantidad mínima: {item.cantidadMin}</p>
          </div>
          <button onClick={() => cancelar()} className="btn btn-outline-danger">
            Cancelar
          </button>
          <button onClick={() => guardar()} className="btn btn-outline-success">
            Guardar
          </button>
        </article>
      )}
    </>
  )
}

export default Article
