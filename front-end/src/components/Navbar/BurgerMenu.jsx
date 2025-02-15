import { useState, useEffect, useRef } from "react";
import { TiThMenu } from "react-icons/ti";
import { BurgerMenuLinks } from "../../lib/data";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden">
      <button onClick={openMenu}>
        <TiThMenu size={30} />
      </button>

      <div className=" absolute top-16 right-0 left-0  " ref={menuRef}>
        {isOpen && (
          <ul className="border w-full  p-2  bg-white">
            <div className="flex justify-end">
              <RxCross2
                onClick={closeMenu}
                size={25}
                color="white"
                className=" cursor-pointer bg-red-500 rounded-lg"
              />
            </div>
            {BurgerMenuLinks &&
              BurgerMenuLinks.map((link) => (
                <li
                  className=" cursor-pointer mb-2 hover:bg-gray-200 p-1 hover:text-yellow-500 text-xl "
                  key={link.title}
                >
                  <Link to={link.href}>{link.title}</Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default BurgerMenu;
