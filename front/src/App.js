import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/Molecules/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
