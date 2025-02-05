import { productsCategories } from "../lib/data";

const SectionTwo = () => {
  return (
    <>
      <div className=" border shadow-sm rounded-lg mt-32 h-auto p-10 w-full flex justify-center items-center gap-32 flex-col md:flex-row">
        {productsCategories.map((category, index) => (
          <div key={index}>
            <div className="bg-slate-100 rounded-full h-36 w-36 flex justify-center items-center mx-auto mt-10 hover:bg-yellow-500 cursor-pointer ">
              <category.icon
                className="hover:scale-125 transition-transform duration-500"
                size={60}
              />
            </div>
            <p className="text-center mt-2 font-bold text-xl">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default SectionTwo;
