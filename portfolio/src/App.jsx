import Index from './pages/Index.jsx'
import Navbor from './components/NavbarComponents.jsx'
import Footer from './components/FooterComponents.jsx'
import Contacto from './pages/Contacto.jsx'
import Proyectos from './pages/Proyectos.jsx'
import Habilidades from './pages/Habilidades.jsx' 
import Formacion from './pages/Formacion.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbor/>

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Proyectos' element={<Proyectos />} />
        <Route path='/Habilidades' element={<Habilidades />} />
        <Route path='Formacion' element={<Formacion />} />
        <Route path='/Contacto' element={<Contacto />} />
        

       
      </Routes>

      <Footer/>     
    </BrowserRouter>
  </>
  )
}
export default App
