import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import QuantityPicker from './components/QtyPicker'
import Product from './components/Product'
import Catalog from './pages/Catalog'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <main className="main-content">
        <h1>Welcome to my online store!</h1>
        <p>Discover amazing products at incredible prices.</p>
      </main> */}
      <Catalog />
      <Footer />
      
    </div>

  )
}

export default App
