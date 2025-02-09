import { FaTv } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { GiVacuumCleaner } from "react-icons/gi";

export const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "products",
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
  },
];
