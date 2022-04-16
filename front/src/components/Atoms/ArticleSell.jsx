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
    <div className="container">
      <div className="card-group mt-3">
        <div className="row">
          <div className="card border-info mt-3 mb-3" style={{ width: "20rem", display: "flex" }}>
            <h5 className="card-header">
              <b>Producto: {item.nombreProducto}</b>
            </h5>
            <div className="card-body">
              <h5>Cantidad a comprar: </h5>
              <input
                type="number"
                placeholder="Cantidad a comprar"
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="form-control mt-2 mn-2"
              />
              <h5>Precio unidad: COP {item.precioUnd}</h5>
              <h5>Cantidad en bodega: {item.cantidadEnBodega}</h5>
              {item.cantidadEnBodega < 0 ? <p>Limite minimo</p> : <></>}

              {!compra.id ? (
                <button className="btn btn-outline-success" onClick={() => comprar(item)}>
                  Comprar
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      {compra.id ? (
        <div className="card border-info mt-3 mb-3" style={{ width: "20rem", display: "flex" }}>
          <button className="btn btn-outline-danger" onClick={() => eliminarCompra()}>
            Eliminar
          </button>
          <button className="btn btn-outline-success" onClick={() => actualizarCompra()}>
            Actualizar
          </button>
        </div>
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
