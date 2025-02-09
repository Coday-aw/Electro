import {
  removeOne,
  addToCart,
} from "../store/features/shoppingCart/ShoppingCartSlice";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeOne(product.product._id));
    toast.success("Removed from cart");
  };
  const addOneToCart = () => {
    dispatch(addToCart(product.product));
    toast.success("Added to cart");
  };
  return (
    <div key={product.product.id} className="flex  gap-5 py-2 border-b">
      <img
        className="w-20 h-20 mb-2"
        src={product.product.images[0]}
        alt="image"
      />
      <div>
        <p className="font-bold mb-1">{product.product.name}</p>
        <p className="text-red-500">{product.product.price}:-</p>
        <div className="flex   items-center gap-5 mt-5">
          <button
            className="border rounded-lg px-3 py-1"
            onClick={removeFromCart}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            className="border rounded-lg px-3 py-1"
            onClick={addOneToCart}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
