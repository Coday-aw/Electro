import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { useEffect } from "react";

function AuthLayout() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  });
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default AuthLayout;
