import { useState, useEffect } from "react"
import { connect } from "react-redux"
import fetchApi from "../../utils/useFetch"
import { addToCart, deleteFromCart } from "../../redux/actionCreator"

const ArticleSell = ({ item, cart, addVentaToCart, deleteVentaFromCart }) => {
  const [cantidad, setCantidad] = useState(0)
  const [compra, setCompra] = useState({})

  const comprar = async () => {
    let bodycompra = { cantidad, articulo: { id: item.id } }
    let compraResult = await fetchApi(`/transaccion/crearcompra`, "POST", bodycompra)
    addVentaToCart(compraResult.id)
    setCompra(compraResult)
  }

  const eliminarCompra = async () => {
    let compraResult = await fetchApi(`/transaccion/eliminar/${compra.id}`, "DELETE")
    deleteVentaFromCart(compraResult.id)
    setCantidad("")
    setCompra({})
  }

  const actualizarCompra = async () => {
    let compraActualizada = { ...compra, cantidad }
    setCompra(compraActualizada)
    await fetchApi(`/transaccion/actualizar/${compra.id}`, "PUT", compraActualizada)
  }

  return (
    <div className="row">
      <div className="card border-success mb-3" style={{ width: "20rem", display: "flex" }}>
        <h5 className="card-header">
          <b>Producto: {item.nombreProducto}</b>
        </h5>
        <h5>Cantidad a comprar: </h5>
        <input type="number" placeholder="Cantidad a comprar" onChange={(e) => setCantidad(Number(e.target.value))} />
        <h5>Precio unidad: COP {item.precioUnd}</h5>
        <h5>Cantidad en bodega: {item.cantidadEnBodega}</h5>
        {item.cantidadEnBodega < 0 ? <p>Limite minimo</p> : <></>}

        {!compra.id ? (
          <button className="btn btn-outline-dark btn-sm" onClick={() => comprar(item)}>
            Comprar
          </button>
        ) : (
          <></>
        )}
      </div>
      {compra.id ? (
        <>
          <button className="btn btn-outline-dark" onClick={() => eliminarCompra()}>
            Eliminar
          </button>
          <button className="btn btn-outline-dark" onClick={() => actualizarCompra()}>
            Actualizar
          </button>
          <h5>✅</h5>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const mapDispatchToProps = (dispatch) => ({
  addVentaToCart(item) {
    dispatch(addToCart(item))
  },
  deleteVentaFromCart(item) {
    dispatch(deleteFromCart(item))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSell)
