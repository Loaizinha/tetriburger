import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BotonAgregar = styled.a`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin: 16px 0;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function ListarProductos() {
  const urlBase = "http://localhost:8080/producto";
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const res = await axios.get(`${urlBase}/productos`);
    setProductos(res.data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const eliminarProducto = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    alert("producto eliminado con éxito");
    cargarProductos();
  };

  const AgregarProductoAlMenu = async (id) => {
    await axios.put(`${urlBase}/${id}`);
    alert("producto añadido al menú");
    cargarProductos();
  };

  const quitarProductoDelMenu = async (id) => {
    await axios.put(`${urlBase}/menu/${id}`);
    alert("producto eliminado del menú");
    cargarProductos();
  };

  return (
    <>
      <BotonAgregar href="/agregar">Agregar Producto</BotonAgregar>
      <div className='container'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, indice) => (
              <tr key={indice}>
                <th scope="row">{producto.idProducto}</th>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>
                  <button
                    onClick={() => eliminarProducto(producto.idProducto)}
                    className='btn btn-sm btn-danger me-2'>
                    Eliminar
                  </button>
                  <Link
                    className='btn btn-sm btn-warning me-2'
                    to={`editar/${producto.idProducto}`}>
                    Editar
                  </Link>
                  {producto.menu?.idMenu === 1 ? (
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => quitarProductoDelMenu(producto.idProducto)}>
                      Quitar del menú
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => AgregarProductoAlMenu(producto.idProducto)}>
                      Añadir al menú
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}