import { FaTv } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "About",
    href: "/aboutUs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const BurgerMenuLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "About",
    href: "/aboutUs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Orders",
    href: "/auth/orders",
  },
];

export const productsCategories = [
  {
    title: "Laptops",
    icon: IoIosLaptop,
    href: "/products",
  },
  {
    title: "Phones",
    icon: IoIosPhonePortrait,
    href: "/products",
  },
  {
    title: "TVs",
    icon: FaTv,
    href: "/products",
  },
  {
    title: "Vacuum Cleaners",
    icon: GiVacuumCleaner,
    href: "/products",
  },
];

export const contacts = [
  {
    title: "Address",
    icon: FaHome,
    content: "Frihetsvägen 36, Stockholm",
  },
  {
    title: "Phone",
    icon: FaPhoneSquareAlt,
    content: "+46 700 72 7039",
  },
  {
    title: "Email",
    icon: MdEmail,
    content: "Electro@support.com",
  },
];
