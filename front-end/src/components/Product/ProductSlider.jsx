import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/features/products/productSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { replace, useNavigate } from "react-router-dom";

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-slate-300 text-black h-8 w-8 sm:h-10 sm:w-10 text-xl rounded-full hover:bg-slate-200 focus:outline-none"
    >
      &#8594;
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-slate-300 text-black w-8 h-8 sm:h-10 sm:w-10 text-xl rounded-full hover:bg-slate-200 focus:outline-none"
    >
      &#8592;
    </button>
  );
};

const ProductSlider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products, loading, error } = useSelector(
    (state) => state.productsList
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.error}</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (productId) => {
    navigate(`/details/${productId}`);
  };

  return (
    <div className=" w-full mt-36 h-[400px] shadow-md p-4">
      <p className="text-center text-3xl font-bold mb-2">
        Recommended Products
      </p>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            onClick={() => handleClick(product._id)}
            className="p-2 h-[300px] cursor-pointer"
            key={product._id}
          >
            <div className="border rounded-lg p-4 bg-white h-full">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto"
                />
              ) : (
                <p>No image available</p>
              )}
              <p>{product.name}</p>
              <p className="text-red-500">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
