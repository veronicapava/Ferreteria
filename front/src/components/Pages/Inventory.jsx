import { useEffect, useState } from "react"
import fetchApi from "../../utils/useFetch"
import Article from "../Atoms/Article"
import Header from "../Header"

const Inventory = () => {
  const [items, setItems] = useState([])
  const [nuevoProd, setNuevoProd] = useState({})
  const [creando, setCreando] = useState(false)

  useEffect(() => {
    async function fetching() {
      let data = await fetchApi("/inventario/lista")
      console.log(data)
      setItems(data)
    }
    fetching()
  }, [])

  const crearArticle = async () => {
    let request = await fetchApi(`/inventario/crear`, "POST", nuevoProd)
    let newProductData = await fetchApi(`/inventario/${request.id}`)
    setItems([...items, newProductData])
    setCreando(false)
  }

  return (
    <div className="container mt-5">
      <Header />
      <h1>Inventario</h1>
      <h1>Articulos en inventario</h1>

      <button onClick={() => setCreando(true)}>Crear nuevo articulo</button>
      {creando ? (
        <article>
          <input
            type="text"
            placeholder="nombreprod"
            onChange={(e) => setNuevoProd({ ...nuevoProd, nombreProducto: e.target.value })}
          />
          <input
            type="number"
            placeholder="preciounid"
            onChange={(e) => setNuevoProd({ ...nuevoProd, precioUnd: e.target.value })}
          />
          <input
            type="number"
            placeholder="cantidad en bodega"
            onChange={(e) => setNuevoProd({ ...nuevoProd, cantidadEnBodega: e.target.value })}
          />
          <input
            type="number"
            placeholder="cantidad maxima "
            onChange={(e) => setNuevoProd({ ...nuevoProd, cantidadMax: e.target.value })}
          />
          <input
            type="number"
            placeholder="cantidad minima"
            onChange={(e) => setNuevoProd({ ...nuevoProd, cantidadMin: e.target.value })}
          />
          <button onClick={() => crearArticle()}>Guardar</button>
          <button onClick={() => setCreando(false)}>Cancelar</button>
        </article>
      ) : (
        <div className="container">
          {items.map((item) => (
            <Article item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Inventory
