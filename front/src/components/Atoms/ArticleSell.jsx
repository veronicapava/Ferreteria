import { useState, useEffect } from "react";
import { connect } from "react-redux";
import fetchApi from "../../utils/useFetch";
import { addToCart } from "../../redux/actionCreator";

const ArticleSell = ({ item, cart, addVentaToCart }) => {
  const [cantidad, setCantidad] = useState(0);

  const comprar = async () => {
    let bodycompra = { cantidad, articulo: { id: item.id } };
    let compraResult = await fetchApi(`/transaccion/crearcompra`, "POST", bodycompra);
    addVentaToCart(compraResult.id);
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
        <button onClick={() => comprar(item)}>Comprar</button>
      </article>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addVentaToCart(item) {
    dispatch(addToCart(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSell);
