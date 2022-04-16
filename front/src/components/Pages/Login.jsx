import { useState } from "react"
import { useAuth } from "../../context/authContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" })
  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({ target: { name, value } }) => {
    //Actualizando los estados
    setUser({ ...user, [name]: value })
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      if (error.code === "auth/user-not-found") setError("Usuario no encontrado")
      if (error.code === "auth/wrong-password") setError("Contraseña incorrecta")
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-group row justify-content-center">
        <div className="col-auto mt-5">
          <h1 className="mt-4">Ferretería Don Raúl POS</h1>
          <label htmlFor="email" className="form-label mt-4">
            Email
          </label>
          <input type="email" name="email" placeholder="Your email" onChange={handleChange} className="form-control" />

          <label htmlFor="password" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            onChange={handleChange}
            className="form-control"
          />
          <button className="mt-4 btn btn-lg btn-primary">Login</button>
        </div>
      </form>
      <div className="form-group row justify-content-center">
        <div className="col-auto mt-5">
          {error && <p className="alert alert-dismissible alert-danger">{error}</p>}
          <button onClick={handleGoogleSignin} className="mt-4 btn btn-info">
            Login With Google Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
