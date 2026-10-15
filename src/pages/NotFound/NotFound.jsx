import { Link } from 'react-router-dom'
import notFoundImg from '../../assets/36723405ae6788b18a972c68ce414b04.gif'
import './NotFound.css'

export const NotFound = () => {
    return (
    <main className="main" id="contenido">
        <div className="sheet sheet--narrow notfound">
            <p className="notfound__code">404</p>
            <h1 className="exercise__title">Esta página no existe</h1>
            <p className="exercise__brief notfound__hint">
                Vuelve al <Link className="notfound__link" to="/">Ejercicio 1</Link> o elige otro del menú superior.
            </p>
            <img className='notfound__img' src={notFoundImg} alt="Gif de gato confundido" />
        </div>
    </main>
    )
}
