import {configureStore} from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        goods: goodsSlice,
        cart: cartSlice,
    }
});


export type AppStore = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
export default store;