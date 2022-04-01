import { useState, useEffect } from "react";
import ArticleSell from "../Atoms/ArticleSell";
import fetchApi from "../../utils/useFetch";
import Header from "../Header";
import CartCounter from "../Atoms/CartCounter";

const Ventas = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchingInventario() {
      let inventario = await fetchApi("/inventario/lista");
      setItems(inventario);
    }

    fetchingInventario();
  }, []);

  return (
    <div>
      <Header />

      <h1>Aqui van los clientes</h1>
      <CartCounter />
      <h3>Artículos disponibles para compra</h3>

      <div className="ed-container">
        {items.map((item) => (
          <ArticleSell item={item} key={item.id} />
        ))}
      </div>

      <button>Generar factura</button>
    </div>
  );
};

export default Ventas;
