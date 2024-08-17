import React,{useState} from 'react'
import '../Ejer5/Ejer5.css'

export const Ejer5 = () => {
    const [work,setWork]=useState([''])
    const [work2,setWork2]=useState('')
    const handleWork=()=>{
        setWork(work); 
        
    }
    
    return (
    <div className='container' >
        <h1>Ejercicio 5</h1>
        <p>Realice un programa que capture en un input la tarea que el usuario guarde en 2 input(nombre de la tarea, descripción).</p>
        <div  className='div-input-result'>
            <input className='input-result' value={`${'Nombre de la tarea: '+work+' Descripción: '+work2} `}  type='text' name='captura'/>
        </div>
        <hr />
        <input className='input-name' onKeyDown={handleWork} onChange={event=>setWork(event.target.value)} type='text' name='nombre de la tarea' placeholder='Ingresa el nombre de la tarea' />
        <input className='input-description' onKeyDown={handleWork} onChange={event=>setWork2(event.target.value)} type='text' name='descripción' placeholder='Ingresa la descripcion de la tarea' />
        
    </div>
    )
}


