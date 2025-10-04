import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import './Catalog.css'

function Catalog() {
    return (
        <div className="catalog">
            <h1>Check Out Our Products</h1>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default Catalog