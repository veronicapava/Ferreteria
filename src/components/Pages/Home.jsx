import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h4>Loading</h4>;
  }

  return (
    <>
      <h1>Hello {user.displayName || user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
