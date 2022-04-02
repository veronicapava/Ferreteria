const Voucher = ({ voucher }) => {
  return (
    <div className="container">
      <div className="card border-success mb-3" style={{ width: "20rem", display: "flex" }}>
        <div>
          <div className="card-header">
            <h4 className="card-title">Volante #{voucher.id}</h4>
          </div>
          <div className="card-body">
            <p>Fecha: {voucher.fecha}</p>

            <p>
              <b>Productos recibidos</b>
            </p>

            {voucher.productosRecibidos.map((pro) => (
              <div>
                {" "}
                <p key={pro.id}>ID: {pro.id} </p>
                <p key={pro.id}>Cantidad: {pro.cantidad} </p>
                <p key={pro.id}>Nombre: {pro.articulo.nombreProducto} </p>
              </div>
            ))}

            <p>
              <b>Proovedor</b>
            </p>
            <p>ID: {voucher.proovedores.id}</p>
            <p>Nombre: {voucher.proovedores.nombreProovedor}</p>
            <p>Telefono: {voucher.proovedores.telefonoProovedor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Voucher
