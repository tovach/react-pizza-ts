import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Post} from "../../types/interfaces";

interface randomSliceState {
    item: Post[]
}

const initialState: randomSliceState = {
    item: []
}

const randomSlice = createSlice({
    name: 'randomSlice',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Post>) {
            state.item.push(action.payload);
        }
    }
})

export const {addItem} = randomSlice.actions;
export default randomSlice.reducer;