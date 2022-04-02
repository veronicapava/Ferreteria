import { useAuth } from "../../context/authContext"
import Header from "../Header"

const Home = () => {
  const { user, logout, loading } = useAuth()
  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.log(err)
    }
  }

  if (loading) {
    return <h4>Loading...</h4>
  }

  return (
    <div className="container">
      <div className="mt-5">
        <h4 className="title">Hello {user.displayName || user.email}</h4>
        <h1>POS Ferretería Don Raúl</h1>
      </div>
      <Header />
      <div>
        <button className="btn btn-secondary my-2 my-sm-0" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Home
