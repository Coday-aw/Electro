import Logo from "./Logo";
import { links } from "../../lib/data";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "../CheckOut/Cart";
import Modal from "../Modal";
import UserMenu from "./UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { LOAD_SAVED_CART } from "../../store/features/shoppingCart/ShoppingCartSlice";

const Navbar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { totalQuantity } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  useEffect(() => {
    const getSavedCart = localStorage.getItem("cart");
    if (getSavedCart) {
      dispatch(LOAD_SAVED_CART(JSON.parse(getSavedCart)));
    }
  }, [dispatch]);

  return (
    <nav className="flex justify-between items-center md:px-5 px-2 py-4 border-b sticky top-0 bg-white z-50">
      <Logo />
      <div className="items-center gap-10 ">
        <ul className=" hidden md:flex space-x-4 justify-center items-center">
          {links &&
            links.map((link, index) => (
              <Link
                to={link.href}
                className="cursor-pointer hover:text-yellow-500 text-xl"
                key={index}
              >
                {link.title}
              </Link>
            ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <div>
          <span className=" absolute top-3  right-24 md:top-3 md:right-16 bg-red-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
            {totalQuantity}
          </span>
          <BsCart2
            className="relative cursor-pointer"
            onClick={openCartModal}
            size={25}
          />
          <Modal isOpen={isCartModalOpen} closeModal={closeCartModal}>
            <Cart />
          </Modal>
        </div>
        <UserMenu />
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
