import { useEffect, useState } from "react";
import fetchApi from "../../utils/useFetch";
import Article from "../Atoms/Article";

const Inventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetching() {
      let data = await fetchApi("/inventario/obtenerinventario");
      console.log(data);
      setItems(data);
    }
    fetching();
  }, []);

  return (
    <div>
      <h1>Inventario</h1>
      <h1>Articulos en inventario</h1>
      <div className="ed-container">
        {items.map((item) => (
          <Article item={item} key={item.id} />
        ))}
      </div>
      <button>Mostrar inventario</button>
    </div>
  );
};

export default Inventory;
