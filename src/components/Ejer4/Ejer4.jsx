import { useState } from 'react';
import Swal from 'sweetalert2';
import './Ejer4.css';

export const Ejer4 = () => {
    const [people, setPeople] = useState([]);
    const [datas, setDatas] = useState({
        name: '',
        user: '',
        email: '',
        phone: '',
        password: '',
    });

    const handlePeople = (e) => {
        e.preventDefault();
        const exists = people.some(
            (p) => p.user === datas.user || p.email === datas.email
        );
        if (exists) {
            Swal.fire({
                icon: "error",
                title: "Usuario duplicado",
                text: "Ese usuario o correo ya está registrado.",
            });
        } else {
            setPeople([...people, datas]);
            Swal.fire({
                icon: "success",
                title: "Usuario registrado",
                text: `${datas.name} quedó en la lista.`,
            });
            setDatas({ name: '', user: '', email: '', phone: '', password: '' });
        }
    };

    const handleInputChange = (event) => {
        setDatas({ ...datas, [event.target.name]: event.target.value });
    };

    return (
    <div className='exercise'>
        <span className='exercise__num' aria-hidden='true'>4</span>
        <h1 className='exercise__title'>Registro de usuarios</h1>
        <p className='exercise__brief'>
            Realice un programa que por medio de un formulario: nombre, usuario, correo, teléfono, contraseña.
            registre en un array con el objeto de esta persona, en caso de que ya exista devuelva una alerta
            notificando la novedad.
        </p>
        <div className='exercise__stage'>
            <form className='form' onSubmit={handlePeople}>
                <div className='form__grid'>
                    <label className='field'>
                        <span className='field__label'>Nombre</span>
                        <input onChange={handleInputChange} value={datas.name} className='input' type='text' name='name' />
                    </label>
                    <label className='field'>
                        <span className='field__label'>Usuario</span>
                        <input onChange={handleInputChange} value={datas.user} className='input' type='text' name='user' />
                    </label>
                    <label className='field'>
                        <span className='field__label'>Correo</span>
                        <input onChange={handleInputChange} value={datas.email} className='input' type='email' name='email' />
                    </label>
                    <label className='field'>
                        <span className='field__label'>Teléfono</span>
                        <input onChange={handleInputChange} value={datas.phone} className='input' type='tel' name='phone' />
                    </label>
                    <label className='field'>
                        <span className='field__label'>Contraseña</span>
                        <input onChange={handleInputChange} value={datas.password} className='input' type='password' name='password' />
                    </label>
                </div>
                <button className='btn form__submit' type='submit'>
                    Registrar
                </button>
            </form>
            <p className='form__count' aria-live='polite'>
                {people.length === 0
                    ? 'Aún no hay usuarios registrados.'
                    : `${people.length} ${people.length === 1 ? 'usuario registrado' : 'usuarios registrados'} en esta sesión.`}
            </p>
        </div>
    </div>
    );
};
