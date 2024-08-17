import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import {Header} from './layouts/Header/Header'
import {Footer} from './layouts/Footer/Footer'
import { Main } from './layouts/Main/Main'
import { Ejercicio2 } from './pages/ejercicio2/Ejercicio2'
import { Ejercicio3 } from './pages/Ejercicio3/Ejercicio3'
import { Ejercicio4 } from './pages/Ejercicio4/Ejercicio4'
import { Ejercicio5 } from './pages/Ejercicio5/Ejercicio5'
import { NotFound } from './pages/NotFound/NotFound'
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


export function App() {
  
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Ejercicio2' element={<Ejercicio2/>}/>
      <Route path='/Ejercicio3' element={<Ejercicio3/>}/>
      <Route path='/Ejercicio4' element={<Ejercicio4/>}/>
      <Route path='/Ejercicio5' element={<Ejercicio5/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/> 
    </>
  )
}

