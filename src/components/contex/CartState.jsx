import { useReducer } from "react";
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from './Type'

const CartState = ({children}) => {
  const initalState = {
    showCart: false,
    cartItem: [],
  }
  const [state,dispatch] = useReducer(CartReducer,initalState)
  const addToCart = item => {
    dispatch({type:ADD_TO_CART,paylod:item})
  }
  const showHideCart = () => {
    dispatch({type:SHOW_HIDE_CART})
  }
  const removeItem = id => {
    dispatch({type:REMOVE_ITEM,paylod:id})
  }
  return(
    <CartContext.Provider value={{
      showCart: state.showCart,
      cartItem:state.cartItem,
      addToCart,
      showHideCart,
      removeItem,
    }}>{children}</CartContext.Provider>
  )
}

export default CartState

