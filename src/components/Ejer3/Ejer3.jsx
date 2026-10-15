import { useState } from 'react'
import './Ejer3.css'

const COLORES = {
    red: 'rojo',
    yellow: 'amarillo',
    orange: 'naranja',
    pink: 'rosa',
    violet: 'violeta',
    blue: 'azul',
    green: 'verde',
}

export const Ejer3 = () => {
    const [color, setColor] = useState('blue')

    const handleColor = () => {
        const names = Object.keys(COLORES)
        const randomIndex = Math.floor(Math.random() * names.length)
        setColor(names[randomIndex])
    }

    return (
    <div className='exercise'>
        <span className='exercise__num' aria-hidden='true'>3</span>
        <h1 className='exercise__title'>Color aleatorio</h1>
        <p className='exercise__brief'>
            Realice un programa que por medio de un botón genere un color aleatorio y lo coloque en el fondo de la aplicación.
        </p>
        <div className='exercise__stage'>
            <button className='btn' onClick={handleColor}>Generar color aleatorio</button>
            <div className='color-stage' style={{ backgroundColor: color }}>
                <span className='color-stage__chip'>Fondo actual: {COLORES[color]}</span>
            </div>
        </div>
    </div>
    )
}
