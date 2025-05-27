import React, { useState } from 'react';
import axios from 'axios';
import Navegador from './Navegador';
import { useNavigate } from 'react-router-dom';

export default function Registro() {

  let navegador = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    clave: ''
  });

  const { nombre, correo, clave } = usuario;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const urlBase = 'http://localhost:8080/usuarios';

    await axios.post(urlBase, usuario);
    alert('Usuario registrado con éxito');
    setUsuario({ nombre: '', correo: '', clave: '' });
    navegador("/login")
  };

  return (
    <>
      <Navegador />
      <div className="container text-center p-5">
        <h3 className="mb-4">REGISTRARSE</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              value={nombre}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Email</label>
            <input
              type="email"
              id="correo"
              name="correo"
              className="form-control"
              value={correo}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="clave" className="form-label">Clave</label>
            <input
              type="password"
              id="clave"
              name="clave"
              className="form-control"
              value={clave}
              onChange={onInputChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </>

  );
}
