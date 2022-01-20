import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PizzaItemCart} from "../../types/interfaces";

interface cartSliceState {
    items: PizzaItemCart[];
    totalPrice: number;
    totalQuantity: number;
}

const initialState: cartSliceState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<PizzaItemCart>) {
            const isExistIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (isExistIndex >= 0) {
                state.items[isExistIndex] = {
                    ...state.items[isExistIndex],
                    quantity: state.items[isExistIndex].quantity + 1,
                }
            } else {
                state.items.push(action.payload)
            }
        },
        removeFromCart(state, action: PayloadAction<PizzaItemCart>) {
            state.items.filter(el => el.id !== action.payload.id)
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;