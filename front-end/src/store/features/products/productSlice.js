import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  error: null,
  loading: false,
  cart: {
    products: [],
  },
};

export const getProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkApi) => {
    try {
      return await productService.getAllProducts();
    } catch (error) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue({ error: error.message });
      } else {
        return thunkApi.rejectWithValue({ error: String(error) });
      }
    }
  }
);

export const productsSlice = createSlice({
  name: "products-list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
