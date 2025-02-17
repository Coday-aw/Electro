import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_SAVED_CART } from "../store/features/shoppingCart/ShoppingCartSlice";
import { useEffect } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.shoppingCart);

  useEffect(() => {
    const getSavedCart = localStorage.getItem("cart");
    if (getSavedCart) {
      dispatch(LOAD_SAVED_CART(JSON.parse(getSavedCart)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <CartItem product={product} key={product.product._id} />
          ))}

          <Link to="/auth/Checkout">
            <button className="bg-blue-500 text-white p-2 rounded-lg mb-3 mt-5 w-full">
              Check out
            </button>
          </Link>

          <p className="border-t p-2">Total Price: {totalPrice}:-</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
