import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

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

      <div>
        <ul>
          <li>
            <Link to="/inventario">Inventario</Link>
          </li>
          <li>
            <Link to="/volantes">Volantes</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/proovedores">Proovedores</Link>
          </li>
          <li>
            <Link to="/ventas">Ventas</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
