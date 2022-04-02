import { useState, useEffect } from "react"
import Header from "../Header"
import Voucher from "../Atoms/Voucher"
import fetchApi from "../../utils/useFetch"

const Vouchers = () => {
  const [voucher, setVoucher] = useState([])
  useEffect(() => {
    async function fetching() {
      let data = await fetchApi("/volantes/obtenervolantes")
      console.log(data)
      setVoucher(data)
    }
    fetching()
  }, [])
  return (
    <div className="container mt-5">
      <Header />
      <br />

      <div className="container flex-column align-items-start">
        {voucher.map((vou) => (
          <Voucher voucher={vou} key={vou.id} />
        ))}
      </div>
    </div>
  )
}

export default Vouchers
