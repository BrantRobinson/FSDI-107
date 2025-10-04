import './QtyPicker.css'
import { useState } from 'react'

function QuantityPicker() {
    const [quantity, setQuantity]=useState(1);

    function decrease() {
        setQuantity (quantity - 1);
    }

    function increase() {
        setQuantity (quantity + 1);
    }

  return (
    <div className='picker'>
      <button className='btnDecrease' onClick={decrease}> - </button>
      <label>{ quantity }</label>
      <button className='btnIncrease' onClick={increase}> + </button>
    </div>
  )
}

export default QuantityPicker
