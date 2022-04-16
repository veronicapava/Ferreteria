import React from "react"
import { connect } from "react-redux"

const CartCounter = ({ cartLength }) => (
  <div className="mt-3 mb-3">
    <span className="badge rounded-pill bg-success">{`Carrito: ${cartLength.length}`}</span>
  </div>
)

const mapStateToProps = (state) => ({
  cartLength: state.cart,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)
