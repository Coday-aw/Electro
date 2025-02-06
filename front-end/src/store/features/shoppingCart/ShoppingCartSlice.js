import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: 0,
  totalQuantity: 0,
  orderPlaced: false,
};

const getTotalPrice = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.product.price * product.quantity;
  });
  return total;
};

const getTotalQuantity = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.quantity;
  });
  return total;
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    LOAD_SAVED_CART: (state, action) => {
      state.cart = action.payload;
      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
    },
    addToCart: (state, action) => {
      const itemRef = state.cart.find(
        (product) => product.product._id === action.payload._id
      );

      if (itemRef) {
        itemRef.quantity++;
      } else {
        state.cart.push({ product: action.payload, quantity: 1 });
      }

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeOne: (state, action) => {
      const itemRef = state.cart.find(
        (product) => product.product._id === action.payload
      );

      if (itemRef.quantity <= 1) {
        state.cart = state.cart.filter(
          (product) => product.product._id !== action.payload
        );
      } else {
        itemRef.quantity--;
      }

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.product._id !== action.payload
      );

      state.totalPrice = getTotalPrice(state.cart);
      state.totalQuantity = getTotalQuantity(state.cart);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.orderPlaced = true;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetOrderPlaced: (state) => {
      state.orderPlaced = false;
    },
  },
});

export const {
  addToCart,
  removeOne,
  removeItem,
  clearCart,
  resetOrderPlaced,
  LOAD_SAVED_CART,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
