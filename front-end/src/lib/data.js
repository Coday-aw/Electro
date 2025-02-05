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
    href: "/product",
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
  },
  {
    title: "Phones",
    icon: IoIosPhonePortrait,
  },
  {
    title: "TVs",
    icon: FaTv,
  },
  {
    title: "Vacuum Cleaners",
    icon: GiVacuumCleaner,
  },
];
