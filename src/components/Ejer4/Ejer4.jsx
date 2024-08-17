import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Ejer4.css';

export const Ejer4 = () => {
    const [people, setPeople] = useState([]);
    const [datas, setDatas] = useState({name: '', user: '', email: '', phone: '',password: ''
    });

    const handlePeople = (e) => {
        e.preventDefault();
        const exists = people.some(
            (p) => p.user === datas.user || p.email === datas.email
        );
        if (exists) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Este usuario ya existe"
                });
        } else {
            setPeople([...people, datas]);
            Swal.fire("Usuario Creado con éxito");
            setDatas({name: '', user: '', email: '', phone: '', password: ''
            });
        }
    };

    const handleInputChange = (event) => {
        setDatas({ ...datas, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <h1>Ejercicio 4</h1>
            <p>
                Realice un programa que por medio de un formulario: nombre, usuario, correo, teléfono, contraseña.
                registre en un array con el objeto de esta persona, en caso de que ya exista devuelva una alerta
                notificando la novedad.
            </p>
            <form className='form' onSubmit={handlePeople}>
                <label>Nombre </label>
                <input onChange={handleInputChange} value={datas.name} className='input' type='text' name='name'
                />
                <br />
                <label>Usuario </label>
                <input onChange={handleInputChange} value={datas.user} className='input' type='text' name='user'
                />
                <br />
                <label>Correo   </label>
                <input onChange={handleInputChange} value={datas.email} className='input'type='email' name='email'
                />
                <br />
                <label>Teléfono  </label>
                <input onChange={handleInputChange} value={datas.phone} className='input' type='tel' name='phone'
                />
                <br />
                <label>Contraseña</label>
                <input onChange={handleInputChange} value={datas.password} className='input' type='password' name='password'
                />
                <br />
                <button className='button' type='submit'>
                    Registrar
                </button>
            </form>
        </div>
    );
};
