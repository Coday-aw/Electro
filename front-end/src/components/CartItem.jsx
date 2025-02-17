import {
  removeOne,
  addToCart,
  removeItem,
} from "../store/features/shoppingCart/ShoppingCartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

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

  const removeProduct = () => {
    dispatch(removeItem(product.product._id));
    toast.success("Product removed from cart");
  };
  return (
    <div key={product.product.id} className="flex  gap-5 py-2 border-b">
      <img
        className="w-16 h-16 mb-2"
        src={product.product.images[0]}
        alt="image"
      />
      <div>
        <p className="font-bold mb-1">{product.product.name}</p>
        <p className="text-red-500">{product.product.price}:-</p>

        <div className="flex   items-center gap-2 mt-2">
          <button
            className="border rounded-lg px-2 py-1"
            onClick={removeFromCart}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            className="border rounded-lg px-2 py-1"
            onClick={addOneToCart}
          >
            +
          </button>
          <button onClick={removeProduct} className="ml-10">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
