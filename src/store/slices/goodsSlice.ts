import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PizzaItem, SortOption} from "../../types/interfaces";

interface goodsSliceState {
    items: PizzaItem[];
    category: string;
    sortBy: SortOption;
}

const initialState: goodsSliceState = {
    items: [],
    category: '',
    sortBy: {name: 'популярности', value: 'rating', order: 'desc'},
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,

    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload
        },
        setSort(state, action: PayloadAction<SortOption>) {
            state.sortBy = action.payload
        },
        addItems(state, action: PayloadAction<PizzaItem[]>) {
            state.items = action.payload;
        }
    }
})

export const {setSort, setCategory, addItems} = goodsSlice.actions;
export default goodsSlice.reducer;