import "./Product.css";
import { useState } from "react";
import QuantityPicker from "./QtyPicker";

function Product(props) {
  const [total, setTotal] = useState(0);

   function handleQuantityChange(newQty) {
    setTotal(newQty * props.data.price);
  }

  return (
    <div className="product-outline">
        <div className="product-card">
            <div className="product">
              <img src={"/img/" + props.data.image} alt="product" />
              <h3>{props.data.title}</h3>
              <div className="prices">
                <div>Price ${props.data.price}</div>
                <div>Total ${total.toFixed(2)}</div>
              </div>
              <QuantityPicker onChange={handleQuantityChange}/>
              <button className="addButton">Add</button>
            </div>
        </div>
    </div>
  );
}

export default Product;
