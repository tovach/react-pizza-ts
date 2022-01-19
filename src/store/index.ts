import {configureStore} from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";

const store = configureStore({
    reducer: {
        goods: goodsSlice,
    }
});


export type AppStore = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
export default store;