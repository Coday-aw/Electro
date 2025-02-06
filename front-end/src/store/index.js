import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./features/products/productSlice";
import { shoppingCartSlice } from "./features/shoppingCart/ShoppingCartSlice";

export const store = configureStore({
  reducer: {
    productsList: productsSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
  },
});
