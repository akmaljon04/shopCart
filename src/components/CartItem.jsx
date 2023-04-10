import React, { useContext } from 'react'
import './CartItem.css'
import CartContext from './contex/CartContext'
function CartItem({item}) {
  const {removeItem} = useContext(CartContext);
  return (
    <li className='CartItem'>
      <img className='product-image' src={item.img} alt="" />
      <hr />
      <div className='cart-price'>
        <h5>{item.name}</h5><h5 className='price'> {item.price} $</h5>
      </div>
      <button className='CartItem-button' onClick={() => removeItem(item.id)}>
        Remova
      </button>
    </li>
  )
}

export default CartItem