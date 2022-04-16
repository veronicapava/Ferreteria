import { useState } from "react"
import fetchApi from "../../utils/useFetch"

const Provider = ({ provider }) => {
  const [editando, setEditando] = useState(false)
  const [temporal, setTemporal] = useState({})

  const guardar = async () => {
    await fetchApi(`/proovedores/actualizar/${provider.id}`, "PUT", temporal)
    console.log(temporal)
    setEditando(false)
    provider = { ...temporal, id: provider.id }
  }
  const cancelar = () => {
    console.log(temporal)
    setEditando(false)
    setTemporal({})
  }
  return (
    <div>
      {!editando ? (
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE PROOVEDOR</th>
                <th>NUMERO DE TELEFONO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-primary">
                <th>{provider.id}</th>
                <th>{provider.nombreProovedor}</th>
                <th>{provider.telefonoProovedor}</th>
              </tr>
              <button className="btn btn-outline-primary" onClick={() => setEditando(true)}>
                Editar
              </button>
            </tbody>
          </table>
        </div>
      ) : (
        <article className="card border-info mb-3" style={{ width: "20rem", display: "flex" }}>
          <div className="card-body">
            <p>Nombre proveedor: {provider.nombreProovedor}</p>
            <input
              type="text"
              required
              placeholder="Actualiza el nombre"
              onChange={(e) => setTemporal({ ...temporal, nombreProovedor: e.target.value })}
              className="form-control"
            />
            <p className="mt-2">Numero de telefono: {provider.telefonoProovedor}</p>
            <input
              type="text"
              required
              placeholder="Actualiza el numero de telefono"
              onChange={(e) => setTemporal({ ...temporal, telefonoProovedor: e.target.value })}
              className="form-control"
            />
          </div>
          <button className="btn btn-outline-danger" onClick={() => cancelar()}>
            Cancelar
          </button>
          <button className="btn btn-outline-success" onClick={() => guardar()}>
            Guardar
          </button>
        </article>
      )}
    </div>
  )
}

export default Provider
