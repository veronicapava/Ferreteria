import { useEffect, useState } from "react"
import Header from "../../Header"
import fetchApi from "../../../utils/useFetch"
import Customer from "../../Atoms/Customer"

const Customers = () => {
  const [customer, setCustomer] = useState([])
  const [creando, setCreando] = useState(false)
  const [temporal, setTemporal] = useState({})

  const crearCliente = async () => {
    let request = await fetchApi(`/clientes/crearcliente/`, "POST", temporal)
    let newCustomer = await fetchApi(`/clientes/obtenercliente/${request.id}`)
    setCreando(false)
    setCustomer([...customer, newCustomer])
  }
  const cancelar = () => {
    setCreando(false)
    setTemporal({})
  }

  useEffect(() => {
    async function fetching() {
      let data = await fetchApi("/clientes/obtenerclientes")
      setCustomer(data)
    }
    fetching()
  }, [])
  return (
    <div className="container mt-5">
      <Header />
      <div className="container mt-3 mb-3 ">
        <h1>Clientes</h1>
      </div>
      {creando ? (
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
          <button className="btn btn-outline-secondary" onClick={() => crearCliente()}>
            Guardar
          </button>
        </article>
      ) : (
        <div>
          <table className="table table-hover table-ligth">
            {customer.map((cus) => (
              <tbody>
                <tr className="table-secondary">
                  <th>
                    <Customer customer={cus} key={cus.id} />
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
          <button className="btn btn-outline-secondary" onClick={() => setCreando(true)}>
            Crear cliente
          </button>
        </div>
      )}
    </div>
  )
}

export default Customers
