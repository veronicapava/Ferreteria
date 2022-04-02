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
          <table className="table table-hover table-ligth">
            <thead>
              <tr>
                <h5>Id: {customer.id}</h5>
                <h5>Nombre cliente: {customer.nombreCliente}</h5>
                <h5>Numero de telefono: {customer.numeroTelefono}</h5>
              </tr>
            </thead>
          </table>

          <button className="btn btn-outline-secondary" onClick={() => setEditando(true)}>
            Editar
          </button>
        </div>
      ) : (
        <article>
          <div className="s-bg-black s-pxy-2">
            <input
              type="text"
              required
              placeholder="Actualiza el nombre"
              onChange={(e) => setTemporal({ ...temporal, nombreCliente: e.target.value })}
            />
            <h5>Nombre cliente: {customer.nombreCliente}</h5>

            <input
              type="text"
              required
              placeholder="Actualiza el numero de telefono"
              onChange={(e) => setTemporal({ ...temporal, numeroTelefono: e.target.value })}
            />
            <h5>Numero de telefono: {customer.numeroTelefono}</h5>
          </div>
          <button className="btn btn-outline-secondary" onClick={() => cancelar()}>
            Cancelar
          </button>
          <button className="btn btn-outline-secondary" onClick={() => guardar()}>
            Guardar
          </button>
        </article>
      )}
    </div>
  )
}

export default Customer
