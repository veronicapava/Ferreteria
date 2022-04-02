import { useState, useEffect } from "react"
import Header from "../../Header"
import fetchApi from "../../../utils/useFetch"
import Provider from "../../Atoms/Provider"

const Providers = () => {
  const [provider, setProvider] = useState([])
  useEffect(() => {
    async function fetching() {
      let data = await fetchApi("/proovedores/obtenerproovedores")
      console.log(data)
      setProvider(data)
    }
    fetching()
  }, [])
  return (
    <div className="container mt-5">
      <Header />
      <div className="container mt-3 mb-3">
        <h1>Proveedores</h1>
      </div>

      <div className="ed-container">
        {provider.map((prov) => (
          <Provider provider={prov} key={prov.id} />
        ))}
      </div>
    </div>
  )
}

export default Providers
