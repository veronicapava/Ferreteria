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
        <article className="s-shadow-bottom">
          <div className="s-bg-black s-pxy-2">
            <h5>Id: {provider.id}</h5>
            <h5>Nombre proveedor: {provider.nombreProovedor}</h5>
            <h5>Numero de telefono: {provider.telefonoProovedor}</h5>
          </div>
          <button className="btn btn-outline-dark" onClick={() => setEditando(true)}>
            Editar
          </button>
        </article>
      ) : (
        <article className="s-shadow-bottom">
          <div className="s-bg-black s-pxy-2">
            <input
              type="text"
              required
              placeholder="Actualiza el nombre"
              onChange={(e) => setTemporal({ ...temporal, nombreProovedor: e.target.value })}
            />
            <h5>Nombre proveedor: {provider.nombreProovedor}</h5>

            <input
              type="text"
              required
              placeholder="Actualiza el numero de telefono"
              onChange={(e) => setTemporal({ ...temporal, telefonoProovedor: e.target.value })}
            />
            <h5>Numero de telefono: {provider.telefonoProovedor}</h5>
          </div>
          <button className="btn btn-outline-dark" onClick={() => cancelar()}>
            Cancelar
          </button>
          <button className="btn btn-outline-dark" onClick={() => guardar()}>
            Guardar
          </button>
        </article>
      )}
    </div>
  )
}

export default Provider
