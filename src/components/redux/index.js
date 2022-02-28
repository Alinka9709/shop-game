import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/cart/reducer'
import gameReducer from '../redux/games/reducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game:gameReducer
    }
})