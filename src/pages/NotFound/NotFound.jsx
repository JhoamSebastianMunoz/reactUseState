import React from 'react'
import notFoundImg from '../../assets/36723405ae6788b18a972c68ce414b04.gif'
import '../NotFound/NotFound.css'

export const NotFound = () => {
    return (
    <main>
        <h1>Not Found, err 404</h1>
        <img className='img-not-found' src={notFoundImg} alt="not Found" />
    </main>
    )
}


