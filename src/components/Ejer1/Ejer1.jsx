import { useState } from 'react'

export const Ejer1 = () => {
    const [name, setName] = useState('')

    return (
    <div className='exercise'>
        <span className='exercise__num' aria-hidden='true'>1</span>
        <h1 className='exercise__title'>Saludo con nombre</h1>
        <p className='exercise__brief'>
            Realiza un componente que capture por medio de inputs: Nombre completo cree el siguiente saludo: “Bienvenido ‘Nombre’” (Realizado en clase)
        </p>
        <div className='exercise__stage'>
            <input
                className='input'
                type='text'
                placeholder='Nombre completo'
                value={name}
                onChange={event => setName(event.target.value)}
                aria-label='Nombre completo'
            />
            <div className='result'>
                <p className='result__label'>Saludo</p>
                <p className={'result__value' + (name ? '' : ' result__value--empty')}>
                    {name ? `Bienvenido, ${name}` : 'Escribe un nombre para ver el saludo'}
                </p>
            </div>
        </div>
    </div>
    )
}
