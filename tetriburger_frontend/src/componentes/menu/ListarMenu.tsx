import React, { useEffect, useState } from 'react';
import './menu.css';
import axios from 'axios';

export default function ListarMenu() {

    const urlBase = "http://localhost:8080/menu";

    const [productos, setProductos] = useState([]);

    const cargarProductos = async () => {
        const res = await axios.get(urlBase);
        setProductos(res.data); // Asegurate que res.data sea un array de productos
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    return (
        <div className="contenedor-menu">
            {
                productos.map((producto, index) => (
                    <div className="producto-card" key={index}>
                        <img src="https://via.placeholder.com/200x150" alt={producto.nombre} />
                        <div className="producto-info">
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <span className="precio">${producto.precio}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
