import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeOne,
  removeItem,
  clearCart,
  LOAD_SAVED_CART,
} from "../store/features/shoppingCart/ShoppingCartSlice";
import Button from "./Button";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state) => state.shoppingCart
  );

  useEffect(() => {
    const getSavedCart = localStorage.getItem("cart");
    if (getSavedCart) {
      dispatch(LOAD_SAVED_CART(JSON.parse(getSavedCart)));
    }
  }, [dispatch]);

  const handleRemoveOne = (productId) => {
    dispatch(removeOne(productId));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.product.id}
              className="flex  justify-center items-center gap-5 py-2"
            >
              <img
                className="w-20 h-20 mb-2"
                src={product.product.images[0]}
                alt="image"
              />
              <div>
                <p className="font-bold mb-1">{product.product.name}</p>
                <p className="text-red-500">{product.product.price}:-</p>
              </div>
            </div>
          ))}
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white p-2 rounded-lg mb-3 w-full"
          >
            Clear Cart
          </button>

          <p className="border-t p-2">Total Price: {totalPrice}:-</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
