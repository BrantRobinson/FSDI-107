import "./Product.css";
import { useState } from "react";
import QuantityPicker from "./QtyPicker";
import { useContext } from "react";
import GlobalContext from "../state/GlobalContext";

function Product(props) {
  const addProduct = useContext(GlobalContext).addProductToCart
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [clicked, setClicked] = useState(false);

  function onAdd() {
    let fixedProduct = {...props.data} // ... is spread operator
    fixedProduct.qty = quantity;
    addProduct(fixedProduct);
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  }

  function handleQuantityChange(newQty) {
    setTotal(newQty * props.data.price);
    setQuantity(newQty);
  }

  return (
    <div className="product-outline">
        <div className="product-card">
            <div className="product">
              <div className="product-image">
                {(() => {
                  const image = props.data?.image || "";
                  const isAbsolute = image.startsWith("http://") || image.startsWith("https://");
                  const imgSrc = isAbsolute ? image : "/img/" + image;
                  return <img src={imgSrc} alt="product" />
                })()}
              </div>
              <h3>{props.data.title}</h3>
              <div className="prices">
                <div>Price ${props.data.price}</div>
                <div>Total ${total.toFixed(2)}</div>
              </div>
              <div className="product-actions">
                <QuantityPicker onChange={handleQuantityChange}/>
                <button onClick={onAdd} className={`addButton${clicked ? " clicked" : ""}`}>Add</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Product;
