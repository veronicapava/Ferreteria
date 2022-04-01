import { ADD_VENTA, DELETE_VENTA } from './action'

const addToCart = venta => ({
    type: ADD_VENTA,
    venta
})

const deleteFromCart = venta => ({
    type: DELETE_VENTA,
    venta
})

export { addToCart, deleteFromCart }