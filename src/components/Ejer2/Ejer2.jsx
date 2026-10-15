import { useState } from 'react'
import './Ejer2.css'

export const Ejer2 = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [resultado, setResultado] = useState(null)

    return (
    <div className='exercise'>
        <span className='exercise__num' aria-hidden='true'>2</span>
        <h1 className='exercise__title'>Cuatro operaciones</h1>
        <p className='exercise__brief'>
            Realiza un programa que realice las 4 operaciones básicas capturando dos números en inputs y mostrando el resultado en un h2 (4 botones: sumar, restar, multiplicar, dividir)
        </p>
        <div className='exercise__stage'>
            <div className='stage__row'>
                <input
                    className='input input--num'
                    type='text'
                    inputMode='numeric'
                    placeholder='Primer número'
                    value={number1}
                    onChange={event => setNumber1(event.target.value)}
                    aria-label='Primer número'
                />
                <input
                    className='input input--num'
                    type='text'
                    inputMode='numeric'
                    placeholder='Segundo número'
                    value={number2}
                    onChange={event => setNumber2(event.target.value)}
                    aria-label='Segundo número'
                />
            </div>
            <div className='stage__row'>
                <button className='btn btn--ghost' onClick={() => setResultado(Number(number1) + Number(number2))}>Sumar</button>
                <button className='btn btn--ghost' onClick={() => setResultado(Number(number1) - Number(number2))}>Restar</button>
                <button className='btn btn--ghost' onClick={() => setResultado(Number(number1) * Number(number2))}>Multiplicar</button>
                <button className='btn btn--ghost' onClick={() => setResultado(Number(number1) / Number(number2))}>Dividir</button>
            </div>
            <div className='result'>
                <p className='result__label'>Resultado</p>
                <p className={'result__value' + (resultado === null ? ' result__value--empty' : '')}>
                    {resultado === null ? 'Elige una operación' : resultado}
                </p>
            </div>
        </div>
    </div>
    )
}
