import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return <h4>Loading</h4>;
  }

  return (
    <>
      <h1>Hello {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
