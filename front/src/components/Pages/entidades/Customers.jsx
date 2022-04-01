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
    <div className="container">
      <Header />
      <h1>Clientes</h1>
      <div>
        <table className="table table-hover table-ligth">
          <thead>
            <tr>
              <th>ID Cliente</th>
              <th>Nombre cliente</th>
              <th>Numero de telefono</th>
            </tr>
          </thead>
          {customer.map((cus) => (
            <tbody>
              <tr className="table-secondary">
                <th>
                  <Customer customer={cus} key={cus.id} />
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <button onClick={() => handleClick()}>Crear cliente</button>
    </div>
  );
};

export default Customers;
