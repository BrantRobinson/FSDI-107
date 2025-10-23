import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import About from './pages/About'
import Admin from './pages/Admin'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='*' element={<Navigate to={"/"}></Navigate>}></Route> 
        </Routes>

        <Footer />
      
      </div>
    </BrowserRouter>

  )
}

export default App
