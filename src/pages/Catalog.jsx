import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import './Catalog.css'
import '../services/dataService'
import { useEffect, useState } from "react"
import DataService from "../services/dataService"

function Catalog() {
    const [product, setProduct] = useState ([])

    useEffect(() => {
        let service = new DataService()
        let data = service.getProducts()
        setProduct(data)
        console.log(product)
    },[])

    return (
        <div className="catalog">
        <h1>Check Out Our Amazing Products</h1>
        <div className="product-list">
            {product.map(prod => <Product key={prod._id} data={prod}/>)}
        </div>
        </div>
    )
}

export default Catalog