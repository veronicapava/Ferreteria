import { useState, useEffect } from "react"
import ArticleSell from "../Atoms/ArticleSell"
import fetchApi from "../../utils/useFetch"
import Header from "../Header"
import CartCounter from "../Atoms/CartCounter"
import { Link } from "react-router-dom"

const Ventas = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchingInventario() {
      let inventario = await fetchApi("/inventario/lista")
      setItems(inventario)
    }

    fetchingInventario()
  }, [])

  return (
    <div className="container mt-5">
      <Header />
      <CartCounter />
      <h3>Artículos disponibles para vender</h3>

      <div className="ed-container">
        {items.map((item) => (
          <ArticleSell item={item} key={item.id} />
        ))}
      </div>
      <div className="mt-5">
        <Link to="/factura">
          <button className="btn btn-outline-dark mb-5">Generar factura</button>
        </Link>
      </div>
    </div>
  )
}

export default Ventas
