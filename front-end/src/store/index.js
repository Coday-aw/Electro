import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productSlice";
import ShoppingCartSlice from "./features/shoppingCart/ShoppingCartSlice";

export const store = configureStore({
  reducer: {
    productList: productsSlice.reducer,
    shoppingCart: ShoppingCartSlice.reducer,
  },
});
