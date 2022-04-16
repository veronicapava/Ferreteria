import React from "react"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import fetchApi from "../../../utils/useFetch"
import jsPDF from "jspdf"
import "jspdf-autotable"

const Invoice = ({ cart }) => {
  const [factura, setFactura] = useState({})
  const [error, setError] = useState(false)

  const exportPDF = () => {
    const unit = "pt"
    const size = "A4"
    const orientation = "portrait"
    const marginLeft = 40
    const doc = new jsPDF(orientation, unit, size)
    doc.setFontSize(15)

    const title = `Factura #${factura.id}        Cliente: ${factura.cliente.nombreCliente}  Tel:${factura.cliente.numeroTelefono}        ${factura.fecha} `
    const headers = [["Articulo", "Cantidad", "Precio", "Subtotal"]]

    let total = factura.productosComprados.reduce((acc, proc) => acc + proc.articulo.precioUnd * proc.cantidad, 0)
    let data = factura.productosComprados.map((proc) => [
      proc.articulo.nombreProducto,
      proc.cantidad,
      proc.articulo.precioUnd,
      proc.articulo.precioUnd * proc.cantidad,
    ])

    let content = {
      startY: 100,
      head: headers,
      body: data,
    }

    doc.text(title, marginLeft, 40)
    doc.text(`Vendedor: ${factura.nombreVendedor}`, 40, 70)
    doc.autoTable(content)
    doc.text(`Total: ${total}`, 300, 800)
    doc.save("factura.pdf")
  }

  useEffect(() => {
    async function fetching() {
      if (!cart.length) {
        return setError(true)
      }

      let body = {
        fecha: "2022-03-30",
        cliente: {
          id: "f55",
        },
        nombreVendedor: "Ana",
        productosComprados: cart.map((id) => ({ id })),
      }

      let facturaCreada = await fetchApi("/facturas/crear", "POST", body)
      let datosFactura = await fetchApi(`/facturas/lista/${facturaCreada.id}`)
      console.log("~ datosFactura", datosFactura)

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

  return factura.cliente ? (
    <div className="container">
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Factura #</th>
            <th>Fecha</th>
            <th>Cliente id</th>
            <th>Nombre Cliente</th>
            <th>Cliente teléfono</th>
            <th>Nombre vendedor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table">
            <th>{factura.id}</th>
            <th>{factura.fecha}</th>
            <th>{factura.cliente.id}</th>
            <th>{factura.cliente.nombreCliente}</th>
            <th>{factura.cliente.numeroTelefono}</th>
            <th>{factura.nombreVendedor}</th>
          </tr>
        </tbody>
      </table>
      <h1>Productos comprados</h1>
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

      <div>
        <button onClick={() => exportPDF()} className="btn btn-outline-success mb-5">
          Generar PDF
        </button>
      </div>
    </div>
  ) : (
    <></>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
