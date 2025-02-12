import { useAuth } from "../components/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  clearCart,
  LOAD_SAVED_CART,
} from "../store/features/shoppingCart/ShoppingCartSlice";
import CartItem from "../components/CartItem";
import toast, { Toaster } from "react-hot-toast";
import CheckOutForm from "../components/CheckOutForm";
import Orders from "../components/Orders";
import { Link } from "react-router-dom";

function CheckOutPage() {
  const dispatch = useDispatch();
  const { token } = useAuth();
  const { cart, totalPrice, orderPlaced } = useSelector(
    (state) => state.shoppingCart
  );

  const handleOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      return toast.error("Your cart is empty");
    }

    if (!token) {
      return toast.error("please log in first!");
    }

    try {
      const res = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ products: cart }),
      });

      const data = await res.json();
      console.log(res, data);
      if (res.status === 201) {
        dispatch(clearCart());
        toast.success("Order placed successfully");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

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
    <>
      <Toaster />
      {cart.length === 0 ? (
        orderPlaced ? (
          <div className="text-2xl">
            <p>
              Your order has being received, thank you for shopping at Electro.
              Veiw your order
            </p>
            <Link to="/auth/orders" className="underline text-blue-500">
              here
            </Link>
          </div>
        ) : (
          <div>cart empty!</div>
        )
      ) : (
        <div className="flex flex-col gap-5 p-20 md:flex-row shadow-lg border rounded-lg  mt-64 ">
          <div>
            <p className="font-bold text-2xl mb-2">Your order summary!</p>
            {cart &&
              cart.map((product) => (
                <CartItem product={product} key={product.product._id} />
              ))}
            <div className="border-t p-2 flex flex-col gap-2 border-b">
              <div className="flex justify-between">
                <p className="text-gray-500">Subtotal: </p>
                <p>{totalPrice}kr</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total:</p>
                <p>{totalPrice}kr</p>
              </div>
            </div>
          </div>
          <CheckOutForm handleOrder={handleOrder} />
        </div>
      )}
    </>
  );
}

export default CheckOutPage;
