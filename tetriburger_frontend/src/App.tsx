import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Registro from './Registro';
import Login from './Login';
import Menu from './Menu'

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/registro" />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
