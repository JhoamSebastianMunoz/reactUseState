import React, { useState } from 'react'
import '../Ejer2/Ejer2.css'

export const Ejer2 = () => {
    const [number1,setNumber1]=useState('')
    const [number2,setNumber2]=useState('')
    const [resultado,setResultado]= useState('')
    return (
    <div>
        <h1>Ejercicio 2</h1>
        <p>Realiza un programa que realice las 4 operaciones básicas capturando dos números en inputs y mostrando el resultado en un h2(4 botones: sumar, restar, multiplicar, dividir)</p>
        <input onChange={(event)=>setNumber1(event.target.value)} type="text" placeholder='Ingrese el primer número' className='input-num1' />
        <input onChange={(event)=>setNumber2(event.target.value)} type="text" placeholder='Ingrese el segundo número' className='input-num2' />
        <div className='divButton'>
        <button className='buton' onClick={()=>setResultado(Number(number1)+Number(number2))} >Sumar números</button>
        <button className='buton' onClick={()=>setResultado(Number(number1)-Number(number2))}>Restar números</button>
        <button className='buton' onClick={()=>setResultado(Number(number1)*Number(number2))}>Multiplicar números</button>
        <button className='buton' onClick={()=>setResultado(Number(number1)/Number(number2))}>Dividir números</button>
        </div>
        <h2>Resultado de la operación seleccionada es: {resultado}</h2>
    </div>
    )
}


