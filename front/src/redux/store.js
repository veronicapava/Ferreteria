import { ADD_TO_CART, DELETE_FROM_CART } from './action'
import { createStore } from 'redux'

const initialStore = {
    cart: []
}

const rootReducer = (state = initialStore, { type, id }) => {
    if (type === ADD_TO_CART) {

        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }

    if (type === DELETE_FROM_CART) {
        return {
            ...state,
            cart: state.cart.filter(c => c !== id)
        }
    }

    return state


}

export default createStore(rootReducer)