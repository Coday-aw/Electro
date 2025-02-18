import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./Product/ProductCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:8080/api/products");
      setProducts(response.data.slice(0, 8));
      console.log(products);
    };
    getProducts();
  }, []);

  return (
    <div className="">
      <p className="text-center font-bold text-5xl mt-16">Our Best Seller</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 lg:p-10 ">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
