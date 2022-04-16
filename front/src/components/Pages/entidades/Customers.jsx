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
        <article className="card border-info mt-3 mb-3" style={{ width: "20rem" }}>
          <div className="s-bg-black s-pxy-2">
            <h5>Nombre cliente: {customer.nombreCliente}</h5>
            <input
              type="text"
              required
              onChange={(e) => setTemporal({ ...temporal, nombreCliente: e.target.value })}
              className="form-control"
            />
            <h5>Numero de telefono: {customer.numeroTelefono}</h5>
            <input
              type="text"
              required
              onChange={(e) => setTemporal({ ...temporal, numeroTelefono: e.target.value })}
              className="form-control"
            />
          </div>
          <button onClick={() => cancelar()} className="btn btn-outline-danger">
            Cancelar
          </button>
          <button className="btn btn-outline-success" onClick={() => crearCliente()}>
            Guardar
          </button>
        </article>
      ) : (
        <div>
          <table className="table table-hover table-ligth">
            <tbody>
              {customer.map((cus) => (
                <Customer customer={cus} key={cus.id} />
              ))}
            </tbody>
          </table>
          <button className="btn btn-outline-success mb-4" onClick={() => setCreando(true)}>
            Crear cliente
          </button>
        </div>
      )}
    </div>
  )
}

export default Customers
