import './Product.css'
import { useState } from 'react'
import QuantityPicker from './QtyPicker';

function Product() {
    const [productTitle, updateTitle]=useState("Product Title Goes Here");
    const [price,updatePrice]=useState(19.99);
    const [total,updateTotal]=useState(0);

    return(
        <div className="product">
            <img src="https://picsum.photos/200" alt='product'/>
            <h5>{ productTitle }</h5>
            <div className="prices">
                <label>Price</label>
                <div>{price}</div>
                <label>Total</label>
                <div>{total}</div>
            </div>
            <QuantityPicker />
        </div>
    )

}

export default Product