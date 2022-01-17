import {configureStore} from "@reduxjs/toolkit";
import randomSlice from "./slices/randomSlice";

const store = configureStore({
    reducer: {
        cart: randomSlice,
    }
});


export type AppStore = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
export default store;