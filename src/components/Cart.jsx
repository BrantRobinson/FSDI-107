import './Cart.css'
import { useContext } from 'react'
import GlobalContext from '../state/GlobalContext'
import { IconTrash } from '@tabler/icons-react';
import QuantityPicker from './QtyPicker';

function Cart() {
  const context = useContext(GlobalContext);
  const cart = context.cart;
  const removeProduct = context.removeProductFromCart;
  const updateQuantity = context.updateProductQuantity;

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className='cart-empty'>Your cart is empty</div>
      ) : (
        <>
          <div className='cart-items'>
            {cart.map(product => (
              <div key={product._id} className='cart-item'>
                <div className='cart-item-image'>
                  <span className='category-tag'>{product.category}</span>
                  <img src={"/img/" + product.image} alt={product.title} />
                </div>
                <div className='cart-item-details'>
                  <h3 className='cart-item-title'>{product.title}</h3>
                  <div className='cart-item-info'>
                    <div className='cart-item-price'>Price: ${product.price}</div>
                    <div className='cart-item-quantity'>
                      <QuantityPicker onChange={(newQty) => updateQuantity(product._id, newQty)} initialQuantity={product.qty} />
                    </div>
                    <div className='cart-item-total'>Item Total: ${(product.price * product.qty).toFixed(2)}</div>
                  </div>
                  <button onClick={() => removeProduct(product._id)} className='btn btn-danger mt-2'><IconTrash stroke={2} /> Remove from Cart</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Cart