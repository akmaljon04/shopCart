import { useContext } from "react";
import './Cart.css'
import CartContext from "./contex/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
  const {showCart, cartItem,showHideCart} = useContext(CartContext);
  return(    
    <>
    {showCart && (
      <div className="cart-wrapper">
        <div style={{textAlign: "right"}}>
          <i style={{cursor:"pointer",fontSize:25}} className="fa fa-times-circle" aria-hidden='true' onClick={showHideCart}></i>
        </div>
        <div className="cart-innerWrapper">
          {cartItem.length === 0 ? (<h4>Cart is Empty</h4>) : 
          (<ul>
            {cartItem.map(item => (
              <CartItem key={item.id} item={item}/>
            ))}
          </ul>)}
        </div>
        <div className="Cart-cartTotal">
          <div className="cart-total">Cart Total</div>
          <div></div>
          <div className="total-price">
            {cartItem.reduce((amount,item) => item.price + amount, 0)} $
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Cart