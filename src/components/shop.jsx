import React, { useContext, useState,useEffect } from 'react'
import './shop.css'
import CartContext from './contex/CartContext'
function Shop() {
  const {addToCart} = useContext(CartContext)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products').then
  ((response)=> response.json())
    .then(json=> 
      {
    const newArr = json.products.map(item => ({name:item.title, id:item.id, img:item.thumbnail, price:item.price}))
        setData(newArr)
      } 
      )
  }, []);
  const {cartItem, showHideCart} = useContext(CartContext)
  const [search,setSearch ] = useState('')
  const HandleOnChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <nav>
      <div className='nav-left'>
        <h2 className='logo'>Store</h2>
      </div>
      <div className="nav-middle">
          <div className="input-wrapper">
            <input type="text" onChange={HandleOnChange} />
            <i className='fas fa-search'/>
          </div>
      </div>
      <div className="nav-right">
        <div className="cart-icon">
            <i className='fa fa-shopping-cart' aria-hidden="true" onClick={showHideCart}/>
            {cartItem.length > 0 && (
              <div className="item-count">
                <span>
                  {cartItem.length}
                </span>
              </div>
            )}
        </div>
      </div>
    </nav>
    <div className="product-wrapper">
      {data.filter((post) => {
        return search.toLowerCase() === "" ? post :post.name.toLowerCase().includes(search)
      })
      .map((post) => (
        <div key={post.id} className="productCard-wrapper">
          <div className="product-img" style={{backgroundImage:`url(${post.img})`}}></div>
          <hr />
          <h2 className="name">{post.name}</h2>
          <p className="ProductCard-price">{post.price} $</p>
          <button className="ProductCard-button" onClick={ () => addToCart(post)}>Add to basket</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Shop