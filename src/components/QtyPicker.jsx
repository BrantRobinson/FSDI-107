import "./QtyPicker.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons";

function QuantityPicker() {
  const [quantity, setQuantity] = useState(0);

  function decrease() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  }

  function increase() {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(99);
    }
  }

  return (
    <div className="picker">
      <button className="btnDecrease" onClick={decrease}><FontAwesomeIcon icon={faSquareMinus} /></button>
      <label>{quantity}</label>
      <button className="btnIncrease" onClick={increase}><FontAwesomeIcon icon={faSquarePlus} /></button>
    </div>
  );
}

export default QuantityPicker;
