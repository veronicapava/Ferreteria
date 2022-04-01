import { useState } from "react";
import fetchApi from "../../utils/useFetch";

const Voucher = ({ voucher }) => {
  //   const [editando, setEditando] = useState(false);
  //   const [temporal, setTemporal] = useState({});

  //   const guardar = async () => {
  //     await fetchApi(`/volantes/actualizar/${voucher.id}`, "PUT", temporal);
  //     console.log(temporal);
  //     setEditando(false);
  //     voucher = { ...temporal, id: voucher.id };
  //   };
  //   const cancelar = () => {
  //     console.log(temporal);
  //     setEditando(false);
  //     setTemporal({});
  //   };
  return (
    <div>
      <article className="s-shadow-bottom">
        <div className="s-bg-black s-pxy-2">
          <p>Info del voucher:</p>
          <h5>Id: {voucher.id}</h5>
          <h5>Fecha: {voucher.fecha}</h5>
          <p>Aqui va la lista de los productos recibidos:</p>
          {voucher.productosRecibidos.map((pro) => (
            <div>
              {" "}
              <h5 key={pro.id}>ID de productos recibidos: {pro.id} </h5>
              <h5 key={pro.id}>Cantidad de productos recibidos: {pro.cantidad} </h5>
              <h5 key={pro.id}>Nombre de producto recibidos: {pro.articulo.nombreProducto} </h5>
            </div>
          ))}

          <p>Esta es la info del proov:</p>
          <h5>Proovedor: {voucher.proovedores.id}</h5>
          <h5>Proovedor: {voucher.proovedores.nombreProovedor}</h5>
          <h5>Proovedor: {voucher.proovedores.telefonoProovedor}</h5>
        </div>
        <button>Editar</button>
      </article>

      {/* 
      {!editando ? (
        <article className="s-shadow-bottom">
          <div className="s-bg-black s-pxy-2">
            <h5>Id: {voucher.id}</h5>
            <h5>Nombre proovedor: {voucher.nombreProovedor}</h5>
            <h5>Numero de telefono: {voucher.telefonoProovedor}</h5>
          </div>
          <button onClick={() => setEditando(true)}>Editar</button>
        </article>
      ) : (
        <article className="s-shadow-bottom">
          <div className="s-bg-black s-pxy-2">
            <input
              type="text"
              required
              placeholder="Actualiza el nombre"
              onChange={(e) => setTemporal({ ...temporal, nombreProovedor: e.target.value })}
            />
            <h5>Nombre proovedor: {voucher.nombreProovedor}</h5>

            <input
              type="text"
              required
              placeholder="Actualiza el numero de telefono"
              onChange={(e) => setTemporal({ ...temporal, telefonoProovedor: e.target.value })}
            />
            <h5>Numero de telefono: {voucher.telefonoProovedor}</h5>
          </div>
          <button onClick={() => cancelar()}>Cancelar</button>
          <button onClick={() => guardar()}>Guardar</button>
        </article>
      )} */}
    </div>
  );
};

export default Voucher;
