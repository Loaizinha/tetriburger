import { useEffect, useState } from 'react';
import { useCarrito } from '../context/Carrito'; 
import './menu.css';
import axios from 'axios';

export default function ListarMenu() {
    const urlBase = "http://localhost:8080/menu";
    const [productos, setProductos] = useState([]);
    const { addItem } = useCarrito(); 

    const cargarProductos = async () => {
        const res = await axios.get(urlBase);
        setProductos(res.data); 
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const handleAgregar = (producto) => {
        addItem({
            idCarritoItem: Date.now(), 
            producto,
            cantidad: 1,
            total: producto.precio,
        });
    };

    return (
        <div className="contenedor-menu">
            {
                productos.map((producto, index) => (
                    <div className="producto-card" key={index}>
                        <img src="/img/cangreBurger.jpeg" alt={producto.nombre} />
                        <div className="producto-info">
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <span className="precio">${producto.precio}</span>
                            {}
                            <button
                                onClick={() => handleAgregar(producto)}
                                style={{
                                    marginTop: 10,
                                    background: "#e63946",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 6,
                                    padding: "8px 16px",
                                    cursor: "pointer",
                                    fontWeight: "bold"
                                }}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
