import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Registro from './componentes/Registro';
import Login from './componentes/Login';
import Menu from './componentes/Navegador'
import Navegador from './componentes/Navegador';
import ListarProductos from './componentes/productos/ListarProductos';

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Navegador />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path='/producto' element={<ListarProductos />}></Route>
      </Routes>
    </Router>
  );
}
