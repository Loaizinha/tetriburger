import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarProducto() {

    let navegador = useNavigate();

    const urlBase = "http://localhost:8080/producto/agregar"

    const [producto, setProduto] = useState({
        nombre:"",
        descripcion:"",
        precio:"",
    })
                                    
    const {nombre, descripcion, precio} = producto;

    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setProduto({...producto, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res = await axios.post(urlBase, producto)
        alert("Producto agregado");
        navegador("/producto")
    }


    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Nombre</label>
            <input id='nombre' name='nombre' type="text" onChange={onInputChange} value={nombre} />
            <br />
            <label htmlFor="">Descripcion</label>
            <input id='descripcion' name='descripcion' type="text" onChange={onInputChange} value={descripcion}/>
            <br />
            <label htmlFor="">Precio</label>
            <input id='precio' name='precio' type="text" onChange={onInputChange} value={precio}/>
            <br />
            <button type='submit'>Enviar</button>

        </form>
    )
}
