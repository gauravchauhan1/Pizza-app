import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from '../Components/CartItem'
import Checkout from '../Components/Checkout'

const Cart = () => {
  
  /*
    - fetches the cart from the store and stores it into the cart variable
    */
  const cart = useSelector(state=>state.cart.selectedProducts)
  
  /*
   - if cart is empty it will render goBackHome part else it will render cartItem part  
  */
  if(cart.length===0)
    {
      return <div className="card" >
      <div className="card-body">
        <h5 className="card-title">OH NO!</h5>
        <h6 className="card-subtitle mb-2 text-muted">Empty cart</h6>
        <p className="card-text">Looks like your cart is empty go to Home page and add some delicious pizza</p>
        <Link to = '/'><button type="button" className="btn btn-outline-primary">Go Back</button></Link>
      </div>
    </div>
    }
  
  return (
    
    <div className='row'>
      <div className='cart-container col'>
        {cart.map(cartItem=>{
          return <div key={cartItem} >
            <CartItem cartItem = {cartItem} />
            
          </div>
        })}
      </div>
      <div className='cart-container col'>
        <Checkout />
      </div>
      
      
    </div>
  )
}

export default Cart