import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
                                    <button onClick={()=>eliminarProducto(producto.idProducto)} className='container btn btn-sm btn-danger'>Eliminar</button>
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
