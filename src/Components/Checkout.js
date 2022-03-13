import React from 'react'
import { useSelector } from 'react-redux'
const Checkout = () => {
    
    const selectedProducts = useSelector(state => state.cart.selectedProducts)
    
    let totalPrice = 0
    selectedProducts.map(({price,quantity})=> totalPrice +=parseInt(price*quantity))
    return (
        <div className="card" >
            <div className="card-header text-center">
            CHECKOUT
            </div>
            {selectedProducts.map( pizza => {
                return <div key={pizza} >
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">{pizza.name}</h6>
                                <div className='row'>
                                    <p className="card-text col">Quantity : {pizza.quantity}</p>
                                    <p className="card-text col">Price : <i className="fa fa-inr"></i>{pizza.quantity*pizza.price}</p>
                                </div>
                            </div>
                        </div>
        })}
            <div>Total Price: <i className="fa fa-inr"></i> {totalPrice}</div>
            <button type="button" className="btn-primary">Checkout</button>
        </div>
    
    
  )
}

export default Checkout