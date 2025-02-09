import { useAuth } from "../components/AuthContext";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  clearCart,
  LOAD_SAVED_CART,
} from "../store/features/shoppingCart/ShoppingCartSlice";
import CartItem from "../components/CartItem";

function CheckOutPage() {
  const dispatch = useDispatch();
  const { cart, totalPrice, orderPlaced } = useSelector(
    (state) => state.shoppingCart
  );

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
    <div className="flex flex-col gap-5">
      <p>Your order summary!</p>
      <div>
        {cart &&
          cart.map((product) => (
            <CartItem product={product} key={product.product._id} />
          ))}
        <button className="bg-red-500 text-white font-bold w-full rounded-lg mt-5 p-2">
          {" "}
          Clear Cart
        </button>
      </div>
      <div className="mt-10">
        <p className="">Total Price: {totalPrice}:-</p>
        <button className="">Order</button>
      </div>
    </div>
  );
}
export default CheckOutPage;
