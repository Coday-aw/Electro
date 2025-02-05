import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Providers from "../components/Provider";

function RootLayout() {
  return (
    <Providers>
      <Navbar />
      <Outlet />
    </Providers>
  );
}
export default RootLayout;
