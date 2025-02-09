import { productsCategories } from "../lib/data";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <>
      <div className=" border shadow-sm rounded-lg mt-32 h-auto p-10 w-full grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        {productsCategories.map((category, index) => (
          <Link to={category.href} key={index}>
            <div className="bg-slate-100 rounded-full h-36 w-36 flex justify-center items-center mx-auto mt-10 hover:bg-yellow-500 cursor-pointer ">
              <category.icon
                className="hover:scale-125 transition-transform duration-500"
                size={60}
              />
            </div>
            <p className="text-center mt-2 font-bold text-xl">
              {category.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};
export default SectionTwo;
