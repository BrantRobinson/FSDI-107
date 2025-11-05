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
  const subtotal = cart.reduce((acc, p) => acc + (p.price * (p.qty || 1)), 0);

  return (
    <div className='cart-page'>
    <div className='cart-container'>
      <h2 className='cart-title'>Your Cart</h2>
      
      {cart.length === 0 ? (
        <div className='cart-empty'>Your cart is empty</div>
      ) : (
        <div className='cart-layout'>
          <div className='cart-items'>
            {cart.map(product => (
              <div key={product._id} className='cart-item'>
                <div className='cart-item-image'>
                  <span className='category-tag'>{product.category}</span>
                  {(() => {
                    const image = product?.image || "";
                    const isAbsolute = image.startsWith("http://") || image.startsWith("https://");
                    const imgSrc = isAbsolute ? image : "/img/" + image;
                    return <img src={imgSrc} alt={product.title} />
                  })()}
                </div>
                <div className='cart-item-details'>
                  <h3 className='cart-item-title'>{product.title}</h3>
                  <div className='cart-item-info'>
                    <div className='cart-item-price'>Price ${product.price.toFixed ? product.price.toFixed(2) : product.price}</div>
                    <div className='cart-item-quantity'>
                      <QuantityPicker onChange={(newQty) => updateQuantity(product._id, newQty)} initialQuantity={product.qty} />
                    </div>
                    <div className='cart-item-total'>Total ${(product.price * product.qty).toFixed(2)}</div>
                  </div>
                  <button onClick={() => removeProduct(product._id)} className='remove-btn'><IconTrash stroke={2} /> Remove</button>
                </div>
              </div>
            ))}
          </div>
          <aside className='cart-summary'>
            <h3>Summary</h3>
            <div className='promo'>
              <label htmlFor='promo'>Have a promo code?</label>
              <div className='promo-row'>
                <input id='promo' type='text' placeholder='Enter code' />
                <button className='apply-btn'>Apply</button>
              </div>
            </div>
            <div className='totals'>
              <div className='row'>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className='row'>
                <span>Shipping</span>
                <span>TBD</span>
              </div>
              <div className='row'>
                <span>Sales Tax</span>
                <span>TBD</span>
              </div>
              <div className='row total'>
                <span>Estimated Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className='checkout-btn'>Checkout</button>
            <p className='help-text'>Need help? Email support@nerdstore.com</p>
          </aside>
        </div>
      )}
    </div>
    </div>
  )
}

export default Cart
