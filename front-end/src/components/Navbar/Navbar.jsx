import Logo from "./Logo";
import { links } from "../../lib/data";
import Buttons from "./Buttons";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center md:px-5 px-2 py-4 border-b">
      <Logo />
      <div className=" items-center gap-10 md:flex hidden">
        <ul className="flex space-x-4 justify-center items-center">
          {links &&
            links.map((link, index) => (
              <Link
                to={link.href}
                className=" cursor-pointer  hover:text-yellow-500 text-xl "
                key={index}
              >
                {link.title}
              </Link>
            ))}
        </ul>
        <Buttons />
      </div>
      <BurgerMenu />
    </nav>
  );
};
export default Navbar;
