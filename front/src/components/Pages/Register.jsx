import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/weak-password") setError("La contraseña debe tener minimo 6 carácteres");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Your email" onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Your password" onChange={handleChange} />

        <button>Register</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default Register;
