import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-[500px] w-full relative">
      <img
        className="h-full w-full object-cover"
        src="public/Banner.webp"
        alt="hero image"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center bg-white bg-opacity-60 p-5 rounded-lg border border-yellow-500">
        <h1 className="text-4xl font-bold">Welcome to Electro</h1>
        <p className="text-xl mt-2 font-bold mb-5">
          Get the best products at the best prices
        </p>
        <Link to="/products">
          <button className="bg-yellow-500 border text-white font-bold p-2 rounded-lg hover:scale-110 ">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};
export default HeroSection;
