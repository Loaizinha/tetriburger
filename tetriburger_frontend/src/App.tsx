import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Registro from './Registro';
import Login from './Login';
import Menu from './Navegador'
import Navegador from './Navegador';

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Navegador />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
