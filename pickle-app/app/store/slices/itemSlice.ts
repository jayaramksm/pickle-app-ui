import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getItemsAPI,
    addItemAPI,
    updateItemAPI,
    deleteItemAPI,
} from "../../services/items.service";

/* ================= TYPES ================= */

export interface Item {
    id?: string;
    name: string;
    price: string;
    type: string;
    description: string;
    img: string;
}

interface ItemState {
    items: Item[];
    loading: boolean;
    error: string | null;
}

/* ================= INITIAL STATE ================= */

const initialState: any = {
    items: [],
    loading: false,
    error: null,
};

/* ================= THUNKS ================= */

// GET ITEMS
export const getItems = createAsyncThunk(
    "items/getItems",
    async (_, { rejectWithValue }) => {
        try {
            return await getItemsAPI();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// ADD ITEM
export const addItem = createAsyncThunk(
    "items/addItem",
    async (item: Item, { dispatch, rejectWithValue }) => {
        try {
            await addItemAPI(item);
            dispatch(getItems());

            return true;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// UPDATE ITEM
export const updateItem = createAsyncThunk(
    "items/updateItem",
    async (
        { id, data }: { id: string; data: Item },
        { dispatch, rejectWithValue }) => {
        try {
            await updateItemAPI(id, data);
            dispatch(getItems());

            return true;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// DELETE ITEM
export const deleteItem = createAsyncThunk(
    "items/deleteItem",
    async (id: string, { dispatch, rejectWithValue }) => {
        try {
            await deleteItemAPI(id);
               dispatch(getItems());

            return true;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

/* ================= SLICE ================= */

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        clearItems: (state) => {
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // GET
            .addCase(getItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(getItems.fulfilled, (state, action: any) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getItems.rejected, (state, action: any) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ADD
            .addCase(addItem.fulfilled, (state, action: any) => {
                // state.items.push(action.payload?.item)
            })

            // UPDATE
            .addCase(updateItem.fulfilled, (state, action: any) => {
                // const index = state.items.findIndex(
                //     (item:any)=> item.id === action.payload.id
                // );
                // if (index !== -1) {
                //     state.items[index] = action.payload;
                // }
            })

            // DELETE
            .addCase(deleteItem.fulfilled, (state, action) => {
                // state.items = state.items.filter(
                //     (item: any) => item.id !== action.payload
                // );
            });
    },
});

export const { clearItems } = itemSlice.actions;
export default itemSlice.reducer;
