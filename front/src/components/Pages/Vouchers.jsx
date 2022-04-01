import { useState, useEffect } from "react";
import Header from "../Header";
import Voucher from "../Atoms/Voucher";
import fetchApi from "../../utils/useFetch";

const Vouchers = () => {
  const [voucher, setVoucher] = useState([]);
  useEffect(() => {
    async function fetching() {
      let data = await fetchApi("/volantes/obtenervolantes");
      console.log(data);
      setVoucher(data);
    }
    fetching();
  }, []);
  return (
    <div>
      <Header />
      <h3>Volantes</h3>
      <div className="ed-container">
        {voucher.map((vou) => (
          <Voucher voucher={vou} key={vou.id} />
        ))}
      </div>
    </div>
  );
};

export default Vouchers;
