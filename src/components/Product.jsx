import "./Product.css";
import { useState } from "react";
import QuantityPicker from "./QtyPicker";

function Product(props) {
  const [total, updateTotal] = useState(0);

  return (
    <div className="product-outline">
        <div className="product-card">
            <div className="product">
              <img src={"/img/" + props.data.image} alt="product" />
              <h3>{props.data.title}</h3>
              <div className="prices">
                <div>Price ${props.data.price}</div>
                <div>Total ${total}</div>
              </div>
              <QuantityPicker />
            </div>
        </div>
    </div>
  );
}

export default Product;
