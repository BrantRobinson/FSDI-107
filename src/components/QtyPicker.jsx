import "./QtyPicker.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-regular-svg-icons";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(props.initialQuantity || 1);

  function decrease() {
    const newQty = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQty);
    props.onChange(newQty);
  }

  function increase() {
    const newQty = quantity < 99 ? quantity + 1 : 99;
    setQuantity(newQty);
    props.onChange(newQty);
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
