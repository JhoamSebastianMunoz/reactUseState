import React, {useState} from 'react'

export const Ejer1 = () => {
    const [name,setName]=useState('')
    
    return (
    <div>
        <h1>Ejercicio 1</h1>
        <p>Realiza un componente que capture por medio de inputs: Nombre completo cree el siguiente saludo: “Bienvenido 'Nombre' (Realizado en clase)</p>
        <input style={{background:'white'}} onKeyDown={event=>setName(event.target.value)} type="text" placeholder='Ingrese el nombre completo' />
        <p>Bienvenido {name}</p>
    </div>
    )
}


