import React from "react"
import { connect } from "react-redux"

const CartCounter = ({ cartLength }) => (
  <div className="mt-3 mb-5">
    <button className="btn btn-outline-dark">{`Carrito: ${cartLength.length}`}</button>
  </div>
)

const mapStateToProps = (state) => ({
  cartLength: state.cart,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)
