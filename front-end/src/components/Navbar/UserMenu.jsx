import { useState, useRef, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, token } = useAuth();
  const menuRef = useRef();

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <FaRegUserCircle size={25} />
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-8 top-14 bg-white border shadow-md w-36 rounded-sm"
        >
          {token ? (
            <ul>
              <li className="hover:bg-gray-100 p-2 cursor-pointer">
                <Link to="/auth/orders">Orders</Link>
              </li>
              <li
                className="hover:bg-gray-100 p-2 cursor-pointer"
                onClick={handleLogout}
              >
                Sign Out
              </li>
            </ul>
          ) : (
            <Link to="/login" className="flex items-center p-2 text-xl">
              Sign in <TbLogin2 size={25} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
export default UserMenu;
