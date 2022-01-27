import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PizzaItemCart} from "../../types/interfaces";

interface cartSliceState {
    items: PizzaItemCart[];
    totalPrice: number;
    totalQuantity: number;
}

const initialState: cartSliceState = {
    items: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem('cartItems')!)
        : [],
    totalPrice: 0,
    totalQuantity: 0,
}


const getTotalPrice = (arr: PizzaItemCart[]) => arr.reduce((sum, el) => sum + el.price * el.quantity, 0)
const getTotalQuantity = (arr: PizzaItemCart[]) => arr.reduce((sum, el) => sum + el.quantity, 0)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<PizzaItemCart>) {
            const isExistIndex = state.items.findIndex(
                (item) => (item.dough === action.payload.dough) && (item.size === action.payload.size) && (item.title === action.payload.title)
            );
            if (isExistIndex >= 0 && state.items[isExistIndex].quantity < 10) {
                state.items[isExistIndex] = {
                    ...state.items[isExistIndex],
                    quantity: state.items[isExistIndex].quantity + 1,

                }
                state.totalPrice = getTotalPrice(state.items);
                state.totalQuantity = getTotalQuantity(state.items);
            } else if (isExistIndex < 0) {
                state.items.push({...action.payload, id: Date.now()});
                state.totalPrice = getTotalPrice(state.items);
                state.totalQuantity = getTotalQuantity(state.items);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeFromCart(state, action: PayloadAction<PizzaItemCart>) {
            state.items = state.items.filter(el => el.id !== action.payload.id);
            state.totalPrice = getTotalPrice(state.items);
            state.totalQuantity = getTotalQuantity(state.items);
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },

        increaseItem(state, action) {
            const isExistIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (isExistIndex >= 0 && state.items[isExistIndex].quantity < 10) {
                state.items[isExistIndex] = {
                    ...state.items[isExistIndex],
                    quantity: state.items[isExistIndex].quantity + 1,

                }
                state.totalPrice = getTotalPrice(state.items);
                state.totalQuantity = getTotalQuantity(state.items);
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            } else {
                return
            }
        },
        decreaseItem(state, action) {
            const isExistIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (isExistIndex >= 0 && state.items[isExistIndex].quantity > 1) {
                state.items[isExistIndex] = {
                    ...state.items[isExistIndex],
                    quantity: state.items[isExistIndex].quantity - 1,
                }
                state.totalPrice = getTotalPrice(state.items);
                state.totalQuantity = getTotalQuantity(state.items);
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            } else {
                return
            }
        },

        cleanOut(state) {
            state.items = [];
            state.totalPrice = getTotalPrice(state.items);
            state.totalQuantity = getTotalQuantity(state.items);
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        getTotals(state) {
            state.totalPrice = getTotalPrice(state.items);
            state.totalQuantity = getTotalQuantity(state.items);
        }


    }
})

export const {addToCart, removeFromCart, increaseItem, decreaseItem, cleanOut, getTotals} = cartSlice.actions;
export default cartSlice.reducer;