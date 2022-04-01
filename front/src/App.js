import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/Molecules/ProtectedRoute'
import Inventory from './components/Pages/Inventory'
import Ventas from './components/Pages/Ventas'
import Volantes from './components/Pages/Volantes'
import Clientes from './components/Pages/entidades/Clientes'
import Proovedores from './components/Pages/entidades/Proovedores'


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventory />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proovedores" element={<Proovedores />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/volantes" element={<Volantes />} />
        </Route>



        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
