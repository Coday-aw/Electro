import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/details/${product._id}`}
      className=" border rounded-lg p-5"
      key={product._id}
    >
      <img
        className="hover:scale-110 w-[300px] h-[200px] object-fit"
        src={product.images[0]}
        alt={product.name}
      />
      <div className="mt-5">
        <p>{product.name}</p>
        <p className="text-red-500">{product.price}:-</p>
      </div>
    </Link>
  );
};
export default ProductCard;
