import { useState } from 'react'
import './Ejer5.css'

export const Ejer5 = () => {
    const [work, setWork] = useState('')
    const [work2, setWork2] = useState('')

    return (
    <div className='exercise'>
        <span className='exercise__num' aria-hidden='true'>5</span>
        <h1 className='exercise__title'>Captura de tareas</h1>
        <p className='exercise__brief'>
            Realice un programa que capture en un input la tarea que el usuario guarde en 2 input (nombre de la tarea, descripción).
        </p>
        <div className='exercise__stage'>
            <div className='stage__row'>
                <label className='field'>
                    <span className='field__label'>Nombre de la tarea</span>
                    <input
                        className='input input--task'
                        onChange={event => setWork(event.target.value)}
                        type='text'
                        name='nombre de la tarea'
                        placeholder='Ingresa el nombre de la tarea'
                    />
                </label>
                <label className='field'>
                    <span className='field__label'>Descripción</span>
                    <input
                        className='input input--task'
                        onChange={event => setWork2(event.target.value)}
                        type='text'
                        name='descripción'
                        placeholder='Ingresa la descripción de la tarea'
                    />
                </label>
            </div>
            <div className='result result--wide'>
                <p className='result__label'>Tarea guardada</p>
                <p className={'result__value' + (work ? '' : ' result__value--empty')}>
                    {work || 'Sin nombre todavía'}
                </p>
                {work2 && <p className='result__note'>{work2}</p>}
            </div>
        </div>
    </div>
    )
}
