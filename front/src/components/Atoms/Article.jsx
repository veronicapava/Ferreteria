import { useState } from "react";
import fetchApi from "../../utils/useFetch";

const Article = ({ item }) => {
  //TODO: falta renderizar cuando se guarde
  const [editando, setEditando] = useState(false);
  const [temporal, setTemporal] = useState({});

  const guardar = async () => {
    let initRequest = {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "origin-when-cross-origin",
      body: JSON.stringify(temporal),
    };

    await fetchApi(`/inventario/actualizar/${item.id}`, initRequest);
    console.log(temporal);
    setEditando(false);
    item = { ...temporal, id: item.id };
  };
  const cancelar = () => {
    console.log(temporal);
    setEditando(false);
    setTemporal({});
  };

  return (
    <>
      {!editando ? (
        <article className="s-shadow-bottom">
          <div className="s-bg-black s-pxy-2">
            <h5>Producto: {item.nombreProducto}</h5>
            <h5>Precio unidad: {item.precioUnd}</h5>
            <h5>Cantidad en bodega: {item.cantidadEnBodega}</h5>
            <h5>Cantidad máxima: {item.cantidadMax}</h5>
            <h5>Cantidad mínima: {item.cantidadMin}</h5>
          </div>
          <button onClick={() => setEditando(true)}>Editar</button>
        </article>
      ) : (
        <article className="s-shadow-bottom">
          <div className="s-bg-black s-pxy-2">
            <input
              type="text"
              placeholder="Nuevo nombre producto"
              required
              onChange={(e) => setTemporal({ ...temporal, nombreProducto: e.target.value })}
            />
            <h5>Producto: {item.nombreProducto}</h5>

            <input
              type="text"
              required
              placeholder="Nuevo precio unidad"
              onChange={(e) => setTemporal({ ...temporal, precioUnd: e.target.value })}
            />
            <h5>Precio unidad: {item.precioUnd}</h5>

            <input
              type="text"
              required
              placeholder="Nueva cantidad en bodega"
              onChange={(e) => setTemporal({ ...temporal, cantidadEnBodega: e.target.value })}
            />
            <h5>Cantidad en bodega: {item.cantidadEnBodega}</h5>

            <input
              type="text"
              required
              placeholder="Nueva cantidad max"
              onChange={(e) => setTemporal({ ...temporal, cantidadMax: e.target.value })}
            />
            <h5>Cantidad máxima: {item.cantidadMax}</h5>

            <input
              type="text"
              required
              placeholder="Nueva cantidad min"
              onChange={(e) => setTemporal({ ...temporal, cantidadMin: e.target.value })}
            />
            <h5>Cantidad mínima: {item.cantidadMin}</h5>
          </div>
          <button onClick={() => cancelar()}>Cancelar</button>
          <button onClick={() => guardar()}>Guardar</button>
        </article>
      )}
    </>
  );
};

export default Article;
