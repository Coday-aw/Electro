import { MdElectricBolt } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <Link to={"/"} className="flex items-center text-xl font-bold">
      <div className=" text-yellow-500 p-1 rounded-full">
        <MdElectricBolt size={25} />
      </div>
      <p>Electro</p>
    </Link>
  );
};
export default FooterLogo;
