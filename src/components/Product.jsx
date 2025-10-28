import "./Product.css";
import { useState } from "react";
import QuantityPicker from "./QtyPicker";
import { useContext } from "react";
import GlobalContext from "../state/GlobalContext";

function Product(props) {
  const addProduct = useContext(GlobalContext).addProductToCart
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function onAdd() {
    let fixedProduct = {...props.data} // ... is spread operator
    fixedProduct.qty = quantity;
    addProduct(fixedProduct);
  }

  function handleQuantityChange(newQty) {
    setTotal(newQty * props.data.price);
    setQuantity(newQty);
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
              <button onClick={onAdd} className="addButton">Add</button>
            </div>
        </div>
    </div>
  );
}

export default Product;
