import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registro from './componentes/Registro';
import Login from './componentes/Login';
import ListarProductos from './componentes/productos/ListarProductos';
import AgregarProducto from './componentes/productos/AgregarProducto';
import ListarMenu from './componentes/menu/ListarMenu';
import Home from './componentes/home/Home';
import EditarProducto from './componentes/productos/EditarProducto';
import { Sidebar } from './componentes/Navegador'; // Usa Sidebar si quieres menú lateral

export default function App() {
  return (
    <Router>
      <Sidebar />
      <div style={{ paddingLeft: 220 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path='/producto' element={<ListarProductos />} />
          <Route path='/agregar' element={<AgregarProducto />} />
          <Route path='/producto/editar/:id' element={<EditarProducto />} />
          <Route path='/menu' element={<ListarMenu />} />
        </Routes>
      </div>
    </Router>
  );
}
