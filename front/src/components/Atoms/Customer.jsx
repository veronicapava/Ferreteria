import { useState } from "react";
import fetchApi from "../../utils/useFetch";

const Customer = ({ customer }) => {
  const [editando, setEditando] = useState(false);
  const [temporal, setTemporal] = useState({});

  const guardar = async () => {
    await fetchApi(`/clientes/actualizar/${customer.id}`, "PUT", temporal);
    console.log(temporal);
    setEditando(false);
    customer = { ...temporal, id: customer.id };
  };
  const cancelar = () => {
    console.log(temporal);
    setEditando(false);
    setTemporal({});
  };

  return (
    <div>
      {!editando ? (
        <article className="s-shadow-bottom">
          <div className="s-bg-black s-pxy-2">
            <h5>Id: {customer.id}</h5>
            <h5>Nombre cliente: {customer.nombreCliente}</h5>
            <h5>Numero de telefono: {customer.numeroTelefono}</h5>
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
              onChange={(e) => setTemporal({ ...temporal, nombreCliente: e.target.value })}
            />
            <h5>Nombre cliente: {customer.nombreCliente}</h5>

            <input
              type="text"
              required
              placeholder="Actualiza el numero de telefono"
              onChange={(e) => setTemporal({ ...temporal, numeroTelefono: e.target.value })}
            />
            <h5>Numero de telefono: {customer.numeroTelefono}</h5>
          </div>
          <button onClick={() => cancelar()}>Cancelar</button>
          <button onClick={() => guardar()}>Guardar</button>
        </article>
      )}
    </div>
  );
};

export default Customer;
