import { useState, useEffect, useRef } from "react";
import { TiThMenu } from "react-icons/ti";
import { links } from "../../lib/data";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    <div className="md:hidden" ref={menuRef}>
      <button onClick={toggleMenu}>
        <TiThMenu size={30} />
      </button>
      {isOpen && (
        <ul className="border w-[200px] mt-2 rounded-lg bg-white">
          {links &&
            links.map((link) => (
              <li
                className=" cursor-pointer  hover:text-yellow-500 text-xl "
                key={link.title}
              >
                {link.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
export default BurgerMenu;
