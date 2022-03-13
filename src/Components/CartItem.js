import React from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE_CART_PRODUCT,SET_CART_PRODUCT } from '../Redux/constants/actionType'
const CartItem = ({cartItem}) => {
    
    const {id,img_url,name,pizzaAddon,price} = cartItem
    let quantity = cartItem.quantity
    
    const dispatch = useDispatch();
    
    /**
     * if the type of button is + or - ,i.e add add the quantity or reduce the quantity 
     * and dispatch the product to the store with the updated quantity
     *
     * @param {*} type
     */
    const setPizzaQuantity = (type) =>{
        
        if (type==='+'){
            quantity +=1
            dispatch({type:SET_CART_PRODUCT,payload:{id,name,price,pizzaAddon,quantity,img_url}})
                
        }
        else{
            if(quantity>1){
                quantity -=1
                dispatch({type:SET_CART_PRODUCT,payload:{id,name,price,pizzaAddon,quantity,img_url}})
            }
            else{
                
                dispatch({type:SET_CART_PRODUCT,payload:{id,name,price,pizzaAddon,quantity,img_url}})
            }
                
        }
        
    }
  return (
      
    <div className="card flex-row flex-wrap" >
        <div className="card-header border-0">
            <img src={img_url} alt="" />
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{pizzaAddon}</p>
            <div >
                 <button type="button" className="btn btn-outline-success" onClick={()=> setPizzaQuantity("+")}>
                     <svg xmlns="http:www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                     </svg>
                 </button>
                
                 <div className='col-sm'>{quantity}</div>
                 <button type="button" className="btn btn-outline-danger " onClick={()=> setPizzaQuantity("-")}>
                     <svg xmlns="http:www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                     <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                     </svg>
                 </button>
               </div>
               <div  style={{padding:'10px 0 0 0'}}>
                <button type="button" className="btn btn-outline-danger" onClick={()=>dispatch({type:REMOVE_CART_PRODUCT,payload:{id:id}})}>Remove From cart</button>
               </div>
        </div>
        
    </div>   
      
     
  )
}

export default CartItem