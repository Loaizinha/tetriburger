import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Registro from './componentes/Registro';
import Login from './componentes/Login';
import Menu from './componentes/Navegador'
import Navegador from './componentes/Navegador';
import ListarProductos from './componentes/productos/ListarProductos';
import AgregarProducto from './componentes/productos/AgregarProducto';
import ListarMenu from './componentes/menu/ListarMenu';
import Home from './componentes/home/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path='/producto' element={<ListarProductos />}></Route>
        <Route path='/agregar' element={<AgregarProducto />}></Route>
        <Route path='/menu' element={<ListarMenu />} />
      </Routes>
    </Router>
  );
}
