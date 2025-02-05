import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/features/products/productSlice";
import { RootState, AppDispatch } from "../store"; // Import the types
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NextArrowProps {
  onClick: () => void;
}

const NextArrow = ({ onClick }: NextArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute  right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black h-8 w-8 sm:h-10 sm:w-10 text-xl rounded-full hover:bg-slate-200 focus:outline-none"
    >
      &#8594;
    </button>
  );
};

interface PrevArrowProps {
  onClick: () => void;
}

const PrevArrow = ({ onClick }: PrevArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute  left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black w-8 h-8 sm:h-10 sm:w-10 text-xl rounded-full hover:bg-slate-200 focus:outline-none"
    >
      &#8592;
    </button>
  );
};

const SectionThree = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.productList
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(products);
  }, [products]);

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
    // Responsive breakpoints
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

  return (
    <div className="mx-10 mt-10 bg-slate-200 p-4 ">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="p-2 h-[300px]" key={product.id}>
            <div className="border rounded-lg p-4 bg-white h-full">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt="product image"
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

export default SectionThree;
