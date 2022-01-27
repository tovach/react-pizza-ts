import {configureStore} from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import cartSlice from "./slices/cartSlice";
import {goodsApi} from "./api/goods.api";

const store = configureStore({
    reducer: {
        goods: goodsSlice,
        cart: cartSlice,
        [goodsApi.reducerPath]: goodsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
});


export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;