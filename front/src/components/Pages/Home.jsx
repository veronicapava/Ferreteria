import { useAuth } from "../../context/authContext";
import Header from "../Header";

const Home = () => {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <>
      <h4>Hello {user.displayName || user.email}</h4>
      <button onClick={handleLogout}>Logout</button>
      <h1>Pos Ferretería Don Raul</h1>
      <Header />
    </>
  );
};

export default Home;
