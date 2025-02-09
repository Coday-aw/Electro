import Logo from "./Logo";
import { links } from "../../lib/data";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import Cart from "../Cart";
import Modal from "../Modal";

import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isUserMenuModalOpen, setIsUserMenuModalOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { token } = useAuth();
  const { totalQuantity } = useSelector((state) => state.shoppingCart);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  const openUserMenuModal = () => setIsUserMenuModalOpen(true);
  const closeUserMenuModal = () => setIsUserMenuModalOpen(false);

  const openBurgerMenu = () => setIsBurgerMenuOpen(true);
  const closeBurgerMenu = () => setIsBurgerMenuOpen(false);

  return (
    <nav className="flex justify-between items-center md:px-5 px-2 py-4 border-b sticky top-0 bg-white z-50">
      <Logo />
      <div className="items-center gap-10 md:flex hidden">
        <ul className="flex space-x-4 justify-center items-center">
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
        <div className="flex gap-4">
          <div>
            <span className=" absolute top-4 right-20 bg-red-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
            <BsCart2
              className="relative cursor-pointer"
              onClick={openCartModal}
              size={25}
            />
            <Modal isOpen={isCartModalOpen} closeModal={closeCartModal}>
              <div className="w-64 right-10 top-12">
                <Cart />
              </div>
            </Modal>
          </div>
          {token ? (
            <div>
              <FaRegUserCircle onClick={openUserMenuModal} size={25} />
              <Modal
                isOpen={isUserMenuModalOpen}
                closeModal={closeUserMenuModal}
              >
                <div className="">
                  <UserMenu />
                </div>
              </Modal>
            </div>
          ) : (
            <Link to="/auth/login">
              <FaRegUserCircle size={25} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
