import { ADD_TO_CART, REMOVE_ITEM, SHOW_HIDE_CART } from "./Type"

const CartReducer = (state,action) => {
  switch(action.type){
    case SHOW_HIDE_CART:{
      return{
        ...state,
        showCart: !state.showCart
      }
    }
    case ADD_TO_CART:{
        return{
          ...state,
          cartItem:[...state.cartItem,action.paylod]
        }
    }
    case REMOVE_ITEM: {
          return{
            ...state,
            cartItem:state.cartItem.filter(item => item.id !== action.paylod)
          }
    }
    default:
      return state
  }
}

export default CartReducer