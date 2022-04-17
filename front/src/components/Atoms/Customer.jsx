import { useState } from "react"
import fetchApi from "../../utils/useFetch"

const Customer = ({ customer }) => {
  const [editando, setEditando] = useState(false)
  const [temporal, setTemporal] = useState({})

  const guardar = async () => {
    await fetchApi(`/clientes/actualizar/${customer.id}`, "PUT", temporal)
    console.log(temporal)
    setEditando(false)
    customer = { ...temporal, id: customer.id }
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
                <th>NOMBRE CLIENTE</th>
                <th>NUMERO DE TELEFONO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-primary">
                <th>{customer.id}</th>
                <th>{customer.nombreCliente}</th>
                <th>{customer.numeroTelefono}</th>
              </tr>
              <button className="btn btn-outline-secondary" onClick={() => setEditando(true)}>
                Editar
              </button>
            </tbody>
          </table>
        </div>
      ) : (
        <article className="card border-info mt-3 mb-3" style={{ width: "30rem", display: "flex" }}>
          <div className="card-body">
            <input
              type="text"
              required
              placeholder="Actualiza el nombre"
              onChange={(e) => setTemporal({ ...temporal, nombreCliente: e.target.value })}
              className="form-control"
            />
            <h5>Nombre cliente: {customer.nombreCliente}</h5>

            <input
              type="text"
              required
              placeholder="Actualiza el número de teléfono"
              onChange={(e) => setTemporal({ ...temporal, numeroTelefono: e.target.value })}
              className="form-control"
            />
            <h5>Numero de telefono: {customer.numeroTelefono}</h5>
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

export default Customer
