import { useState, useEffect } from "react";
import ArticleSell from "../Atoms/ArticleSell";
import fetchApi from "../../utils/useFetch";
import Header from "../Header";

const Ventas = () => {
  const [items, setItems] = useState([]);
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    async function fetchingInventario() {
      let inventario = await fetchApi("/inventario/lista");
      setItems(inventario);
    }
    async function fetchingVentas() {
      let compras = await fetchApi("/transaccion/obtenercompras");
      setCompras(compras);
    }
    fetchingInventario();
    fetchingVentas();
  }, []);

  return (
    <div>
      <Header />
      <h1>Aqui van los clientes</h1>
      <h3>Artículos para Comprar</h3>
      <p>Cantidad en carrito:</p>
      <div className="ed-container">
        {items.map((item) => (
          <ArticleSell item={item} key={item.id} />
        ))}
      </div>

      <h3>Historial de compras TODO: esto no va aqui</h3>
      <div>
        {compras.map((compra) => (
          <h5>
            Compra {compra.id} , articulo: {compra.articulo.nombreProducto}, cantidad: {compra.cantidad}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Ventas;
