import { useEffect, useState } from "react";
import Header from "../../Header";
import fetchApi from "../../../utils/useFetch";
import Customer from "../../Atoms/Customer";

const Customers = () => {
  const [customer, setCustomer] = useState([]);

  const handleClick = () => {
    console.log("Crear cliente");
  };

  useEffect(() => {
    async function fetching() {
      let data = await fetchApi("/clientes/obtenerclientes");
      setCustomer(data);
    }
    fetching();
  }, []);
  return (
    <div>
      <Header />
      <h1>Clientes</h1>
      <button onClick={() => handleClick()}>Crear cliente</button>
      <div className="ed-container">
        {customer.map((cus) => (
          <Customer customer={cus} key={cus.id} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
