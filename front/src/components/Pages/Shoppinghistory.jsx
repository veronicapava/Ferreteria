import { useState, useEffect } from "react";
import Header from "../Header";
import fetchApi from "../../utils/useFetch";

const Shoppinghistory = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    async function fetchingVentas() {
      let compras = await fetchApi("/transaccion/obtenercompras");
      setCompras(compras);
    }
    fetchingVentas();
  }, []);

  return (
    <div>
      <Header />
      <h3>Shopping history</h3>
      <div>
        {compras.map((compra) => (
          <h5>
            Compra id: {compra.id} , articulo: {compra.articulo.nombreProducto}, cantidad: {compra.cantidad}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Shoppinghistory;
