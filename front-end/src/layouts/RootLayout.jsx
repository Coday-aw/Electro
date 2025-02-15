import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Providers from "../components/Provider";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Providers>
  );
}
export default RootLayout;
