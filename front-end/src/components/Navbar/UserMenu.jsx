import { useAuth } from "../AuthContext";

const UserMenu = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <button onClick={handleLogout}>Logut</button>
    </div>
  );
};
export default UserMenu;
