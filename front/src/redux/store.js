import { ADD_VENTA, DELETE_VENTA } from './action'
import { createStore } from 'redux'

const initialStore = {
    ventas: []
}

const rootReducer = (state = initialStore, { type, nuevaVenta }) => {
    if (type === ADD_VENTA) {
        let newArt = [...state.ventas, nuevaVenta]

        return {
            ...state,
            ventas: newArt
        }
    }
}

export default createStore(rootReducer)