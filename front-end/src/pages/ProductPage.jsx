import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/features/products/productSlice";
import ProductList from "../components/ProductList";

function ProductPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products, error, loading } = useSelector(
    (state) => state.productList
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>
        <img
          className=" mt-10 w-full max-h-[300px] object-contain "
          src="public/product-cover.jpg"
          alt="product image"
        />
      </div>

      <ProductList products={products} />
    </div>
  );
}
export default ProductPage;
