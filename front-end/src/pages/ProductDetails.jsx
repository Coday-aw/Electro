import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/shoppingCart/ShoppingCartSlice";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8080/api/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {product && (
        <div className=" flex  p-10 sm:flex-col md:flex-row gap-10">
          <div className="flex-1">
            <img src={product.images[activeImg]} alt={product.name} />
            <div className="flex gap-2 justify-center">
              {product.images.map((img, index) => (
                <img
                  className=" w-[100px] h-[100px] cursor-pointer border rounded-lg"
                  key={index}
                  src={img}
                  alt={product.name}
                  onClick={() => setActiveImg(index)}
                />
              ))}
            </div>
          </div>
          <div className="w-[400px] flex flex-col gap-10 flex-1 ">
            <p className="font-bold text-2xl ">{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}:-</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white p-2 rounded-lg flex items-center justify-center gap-2"
            >
              add product
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
