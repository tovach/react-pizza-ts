import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PizzaItem, SortOption} from "../../types/interfaces";

interface goodsSliceState {
    item: PizzaItem[];
    category: string;
    sortBy: SortOption;
}

const initialState: goodsSliceState = {
    item: [],
    category: '',
    sortBy: {} as SortOption,
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,

    reducers: {
        setCategory(state, action:PayloadAction<string>) {
            state.category = action.payload
        },
        setSort(state, action:PayloadAction<SortOption>) {
            state.sortBy = action.payload
        },
    }
})

export const {setSort, setCategory} = goodsSlice.actions;
export default goodsSlice.reducer;