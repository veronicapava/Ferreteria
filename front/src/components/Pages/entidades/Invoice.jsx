import React from "react"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import fetchApi from "../../../utils/useFetch"

const Invoice = ({ cart }) => {
  const [factura, setFactura] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetching() {
      console.log("~ cart", cart)
      if (!cart.length) {
        console.log("Entra al error")
        return setError(true)
      }

      let body = {
        fecha: "2022-03-30",
        cliente: {
          id: "f55",
        },
        nombreVendedor: "elpato",
        productosComprados: cart.map((id) => ({ id })),
      }

      let facturaCreada = await fetchApi("/facturas/crear", "POST", body)
      let datosFactura = await fetchApi(`/facturas/lista/${facturaCreada.id}`)
      console.log(datosFactura)
      setFactura(datosFactura)
    }
    fetching()
  }, [])

  if (error) {
    return (
      <div>
        <h1>Factura</h1>
        <h1>Error. No es posible generar la factura</h1>
      </div>
    )
  }

  return (
    <div>
      <h2>Consolidar Factura</h2>
      <h1>Factura</h1>
      <h2>Factura: {factura.id}</h2>
      <h2>Fecha: {factura.fecha}</h2>
      {/* <h2>Cliente: {factura.cliente.id}</h2>
      <h2>Cliente nombre: {factura.cliente.nombreCliente}</h2>
      <h2>Nombre vendedor: {factura.nombreVendedor}</h2>
      <h2>Cliente telefono: {factura.cliente.numeroTelefono}</h2> */}
      <h2>Productos comprados: </h2>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>Articulo</th>
            <th>Cantidad</th>
            <th>Precio Unidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        {factura.productosComprados.map((proc) => (
          <tbody>
            <tr className="table-secondary">
              <td>{proc.articulo.nombreProducto}</td>
              <th>{proc.cantidad}</th>
              <th>{proc.articulo.precioUnd}</th>
              <th>{proc.articulo.precioUnd * proc.cantidad}</th>
            </tr>
          </tbody>
        ))}
      </table>
      <p>
        Total:
        {factura.productosComprados.reduce((acc, proc) => acc + proc.articulo.precioUnd * proc.cantidad, 0)}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
