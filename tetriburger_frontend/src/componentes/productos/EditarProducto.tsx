import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarProducto() {

    const { id } = useParams();

    let navegador = useNavigate();

    const urlBase = "http://localhost:8080/producto/editar";

    const [producto, setProducto] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
    });

    const { nombre, descripcion, precio } = producto;

    const cargarProducto = async () => {
        const res = await axios.get(`${urlBase}/${id}`)
        const data = res.data;

        setProducto(data);
    }

    useEffect(() => {
        cargarProducto();
    }, [])

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        await axios.put(`${urlBase}/${id}`, producto)
        alert("producto actualizado correctamente");
        navegador("/producto")
    }




    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Nombre</label>
            <input id='nombre' name='nombre' type="text" onChange={onInputChange} value={nombre} />
            <br />
            <label htmlFor="">Descripcion</label>
            <input id='descripcion' name='descripcion' type="text" onChange={onInputChange} value={descripcion} />
            <br />  
            <label htmlFor="">Precio</label>
            <input id='precio' name='precio' type="text" onChange={onInputChange} value={precio} />
            <br />
            <button type='submit'>Enviar</button>

        </form>
    )
}
