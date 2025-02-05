import { Provider } from "react-redux";
import { AuthProvider } from "./AuthContext";
import { store } from "../store/index";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    </>
  );
};
export default Providers;
