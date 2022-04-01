const Voucher = ({ voucher }) => {
  return (
    <div className="container">
      <div className="card border-success mb-3" style={{ width: "20rem", display: "flex" }}>
        <div>
          <div className="card-header">
            <h4 className="card-title">Info del volante</h4>
          </div>
          <div className="card-body">
            <p>Id: {voucher.id}</p>
            <p>Fecha: {voucher.fecha}</p>

            <p>Aqui va la lista de los productos recibidos:</p>
            {voucher.productosRecibidos.map((pro) => (
              <div>
                {" "}
                <p key={pro.id}>ID de productos recibidos: {pro.id} </p>
                <p key={pro.id}>Cantidad de productos recibidos: {pro.cantidad} </p>
                <p key={pro.id}>Nombre de producto recibidos: {pro.articulo.nombreProducto} </p>
              </div>
            ))}

            <p>Esta es la info del proov:</p>
            <p>Proovedor: {voucher.proovedores.id}</p>
            <p>Proovedor: {voucher.proovedores.nombreProovedor}</p>
            <p>Proovedor: {voucher.proovedores.telefonoProovedor}</p>
          </div>
          <button>Editar</button>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
