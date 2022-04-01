import React from "react";
import { connect } from "react-redux";

const CartCounter = ({ cartLength }) => (
  <div>
    <button>{`Carrito: ${cartLength.length}`}</button>
  </div>
);

const mapStateToProps = (state) => ({
  cartLength: state.cart,
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
