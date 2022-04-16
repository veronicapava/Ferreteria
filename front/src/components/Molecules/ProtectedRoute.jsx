import React from "react"
import { useAuth } from "../../context/authContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading)
    return (
      <div className="container">
        <h1 className="mt-5">Cargando...</h1>
      </div>
    )

  return user ? <Outlet /> : <Navigate to="/login" />
  return <>{children}</>
}

export default ProtectedRoute
