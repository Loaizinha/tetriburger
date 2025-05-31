import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListarProductos() {

    const urlBase = "http://localhost:8080/producto";

    const [productos, setProductos] = useState([]);

    const cargarProductos = async()=>{
        const res = await axios.get(`${urlBase}/productos`);
        setProductos(res.data);
    }

    useEffect(()=>{
        cargarProductos();
    },[])

    const eliminarProducto = async(id)=>{
        const res = await axios.delete(`${urlBase}/${id}`);
        alert("producto eliminado con exito");
        cargarProductos();
    }

    const AgregarProductoAlMenu = async(id)=>{
        const res = await axios.put(`${urlBase}/${id}`);
        alert("producto añadido al menu");
        cargarProductos();
    }

    const quitarProductoDelMenu = async(id)=>{
        const res = await axios.put(`${urlBase}/menu/${id}`);
        alert("producto eliminado del menu");
        cargarProductos();
    }

    

    return (
        <>
        <a href="/agregar">Agregar Producto</a>
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, indice) => (
                            <tr key={indice}>
                                <th scope="row">{producto.idProducto}</th>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <button onClick={()=>eliminarProducto(producto.idProducto)} className='btn btn-sm btn-danger me-2'>Eliminar</button>
                                    <Link className='btn btn-sm btn-warning me-2' to={`editar/${producto.idProducto}`}>Editar</Link>
                                    {
                                         producto.menu?.idMenu === 1 ? <button className="btn btn-sm btn-secondary" onClick={()=>quitarProductoDelMenu(producto.idProducto)}>Quitar del menu</button> : <button className="btn btn-success btn-sm" onClick={()=>AgregarProductoAlMenu(producto.idProducto)}>Añadir al menu</button> 

                                    }   
                                    
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
        </>
        
    )
}
