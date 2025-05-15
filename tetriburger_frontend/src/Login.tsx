import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {
    const [usuario, setUsuario] = useState({
        correo: '',
        clave: ''
    });

    const { correo, clave } = usuario;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const urlBase = 'http://localhost:8080/login';

    const respuesta = await axios.post(urlBase, usuario);

    if (respuesta.data === "SI") {
        alert("BIENVENIDO CRACK")
    }
    else{
        alert("RECHAZADO PEDAZO DE BOLLO")
    }

  };



    return (
        <div>
            <div className="container text-center p-5">
                <h3 className="mb-4">Iniciar Sesion</h3>
                <form onSubmit={onSubmit}>

                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Email</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            className="form-control"
                            value={correo}
                            onInput={onInputChange}
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
                            onInput={onInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    )
}
