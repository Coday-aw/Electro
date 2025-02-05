import { MdElectricBolt } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center text-3xl font-bold">
      <div className=" text-yellow-500 p-1 rounded-full">
        <MdElectricBolt />
      </div>
      <p>Electro</p>
    </Link>
  );
};
export default Logo;
