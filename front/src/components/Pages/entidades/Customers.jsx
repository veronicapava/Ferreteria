import { useEffect, useState } from "react"
import Header from "../../Header"
import fetchApi from "../../../utils/useFetch"
import Customer from "../../Atoms/Customer"

const Customers = () => {
  const [customer, setCustomer] = useState([])

  const handleClick = () => {
    console.log("Crear cliente")
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
      </div>
      <button className="btn btn-outline-secondary" onClick={() => handleClick()}>
        Crear cliente
      </button>
    </div>
  )
}

export default Customers
