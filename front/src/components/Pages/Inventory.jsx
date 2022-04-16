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
      <h1 className="mt-4 mb-4">Articulos en inventario</h1>

      <button onClick={() => setCreando(true)} className="btn btn-lg btn-primary">
        Crear nuevo articulo
      </button>
      {creando ? (
        <article className="card border-info mt-3" style={{ width: "20rem", display: "flex" }}>
          <div className="card-body">
            <input
              type="text"
              placeholder="Nombre producto"
              onChange={(e) => setNuevoProd({ ...nuevoProd, nombreProducto: e.target.value })}
              className="form-control"
            />
            <input
              type="number"
              placeholder="Precio unidad"
              onChange={(e) => setNuevoProd({ ...nuevoProd, precioUnd: e.target.value })}
              className="form-control"
            />
            <input
              type="number"
              placeholder="Cantidad en bodega"
              onChange={(e) => setNuevoProd({ ...nuevoProd, cantidadEnBodega: e.target.value })}
              className="form-control"
            />
            <input
              type="number"
              placeholder="Cantidad maxima "
              onChange={(e) => setNuevoProd({ ...nuevoProd, cantidadMax: e.target.value })}
              className="form-control"
            />
            <input
              type="number"
              placeholder="Cantidad minima"
              onChange={(e) => setNuevoProd({ ...nuevoProd, cantidadMin: e.target.value })}
              className="form-control"
            />
          </div>
          <button onClick={() => crearArticle()} className="btn btn-outline-success">
            Guardar
          </button>
          <button onClick={() => setCreando(false)} className="btn btn-outline-danger">
            Cancelar
          </button>
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
