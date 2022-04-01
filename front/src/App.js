import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/Molecules/ProtectedRoute'
import Inventory from './components/Pages/Inventory'
import Ventas from './components/Pages/Ventas'
import Vouchers from './components/Pages/Vouchers'
import Customers from './components/Pages/entidades/Customers'
import Providers from './components/Pages/entidades/Providers'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/inventario" element={<Inventory />} />
            <Route path="/clientes" element={<Customers />} />
            <Route path="/proovedores" element={<Providers />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/volantes" element={<Vouchers />} />
          </Route>



          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
