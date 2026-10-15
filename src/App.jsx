import './styles/exercise.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Header } from './layouts/Header/Header'
import { Footer } from './layouts/Footer/Footer'
import { Ejercicio2 } from './pages/Ejercicio2/Ejercicio2'
import { Ejercicio3 } from './pages/Ejercicio3/Ejercicio3'
import { Ejercicio4 } from './pages/Ejercicio4/Ejercicio4'
import { Ejercicio5 } from './pages/Ejercicio5/Ejercicio5'
import { NotFound } from './pages/NotFound/NotFound'

export function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ejercicio2' element={<Ejercicio2 />} />
        <Route path='/Ejercicio3' element={<Ejercicio3 />} />
        <Route path='/Ejercicio4' element={<Ejercicio4 />} />
        <Route path='/Ejercicio5' element={<Ejercicio5 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
