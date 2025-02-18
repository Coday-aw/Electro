import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" p-5 flex flex-col md:flex-row justify-between items-center mt-20 border-t-2">
      <div className="flex gap-10 items-center ">
        <p className="font-bold text-3xl">Electro.</p>
        <div className="bg-gray-600 w-[2px] h-20"></div>
        <div className="flex flex-col">
          <div className="flex gap-2 font-bold">
            <p>
              <Link to="/aboutUs">About</Link>
            </p>
            <p>Support</p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <p className="text-gray-500">
            &copy; 2025 Electro. All rights reserved{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:mt-0 justify-center items-center gap-1">
        <div className="flex gap-5">
          <FaFacebook size={25} />
          <FaXTwitter size={25} />
          <FaLinkedin size={25} />
          <FaYoutube size={25} />
        </div>
        <p className="text-gray-500">Support:Elctro@Support.com </p>
      </div>
    </footer>
  );
};
export default Footer;
