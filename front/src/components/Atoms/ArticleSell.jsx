import { useState } from "react";
import fetchApi from "../../utils/useFetch";

const ArticleSell = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const comprar = async () => {
    let bodycompra = { cantidad, articulo: { id: item.id } };
    console.log(JSON.stringify(bodycompra, null, 2));
    await fetchApi(`/transaccion/crearcompra`, "POST", bodycompra);
  };

  return (
    <div>
      <article className="s-shadow-bottom">
        <div className="s-bg-black s-pxy-2">
          <h5>Cantidad a comprar: </h5>
          <input type="number" placeholder="Cantidad a comprar" onChange={(e) => setCantidad(Number(e.target.value))} />
          <h5>Producto: {item.nombreProducto}</h5>
          <h5>Precio unidad: COP {item.precioUnd}</h5>
          <h5>Cantidad en bodega: {item.cantidadEnBodega}</h5>
          {item.cantidadEnBodega < 0 ? <p>Limite minimo</p> : <></>}
        </div>
        <button onClick={() => comprar()}>Comprar</button>
      </article>
    </div>
  );
};

export default ArticleSell;
