import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import GlobalProvider from './state/globalProvider'

import About from './pages/About'
import Admin from './pages/Admin'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';






function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            {/* <Route path='*' element={<Navigate to='/' replace />}></Route> */}
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
