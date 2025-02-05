import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex gap-2">
      <Link to="/auth/login">
        <button className="bg-yellow-500 p-2 rounded-lg text-white font-semibold">
          Sign In
        </button>
      </Link>
      <Link to="/auth/register">
        <button className="border border-yellow-500 p-2 rounded-lg text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white">
          Sign Up
        </button>
      </Link>
    </div>
  );
};
export default Buttons;
