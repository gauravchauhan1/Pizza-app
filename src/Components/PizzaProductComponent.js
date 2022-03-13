import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_CART_PRODUCT } from '../Redux/constants/actionType'




const PizzaProductComponent = ({product}) => {
  
  const {id,name,price,rating,size,description,img_url,isVeg} = product
  const dispatch = useDispatch();
  const [pizzaAddon,setPizzaAddon] = useState('Regular');
  const [quantity,setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  /**
   * this function dispatches cart to the store
   *
   * @param {*} e
   */
  const setCart = (e) => {
      
        dispatch({type:SET_CART_PRODUCT,payload:{id,name,price,pizzaAddon,quantity,img_url}})   
  } 
  

  const editPizza = (edit)=>{
    setPizzaAddon(edit)
  }

  

  return (
    
    <div className="product-container">
      
      <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={img_url} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
          
            <li className="list-group-item">
              <div className='row'>
                <div className='col'>Rating : {rating}</div>
                <div className='col'>
                {!isVeg?<img src="https://img.icons8.com/fluency/48/000000/non-vegetarian-food-symbol.png" style={{width:'20px',height:'20px'}} alt='pizza'/>
                :<img src="https://img.icons8.com/ios-filled/50/26e07f/non-vegetarian-food-symbol--v2.png" style={{width:'20px',height:'20px'}} alt='pizza'/>}
                </div>
              </div>
            </li>
            <li className="list-group-item">Price : <i className="fa fa-inr"></i> {price}</li>
          </ul>
          <div className="card-body">
            <button type="button" className="btn btn-outline-success" onClick={handleShow}>Customize</button> 
          </div>
      </div>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customize your pizza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-subtitle">
            <div className="modal-subtitle">{size[0].title}</div>
            <div>{size[0].items.map(addOn => {return <button type="button" className="btn btn-outline-dark modal-subtitle" key={addOn.size} onClick={()=> editPizza(addOn.size)}>{addOn.size}</button>})}</div>
          </div>
          <div className='modal-subtitle'>Add pizza
          <div >
              <button type="button" className="btn btn-outline-success" onClick={()=> setQuantity(prev => prev+1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
              </button>
              
              <div>{quantity}</div>
              <button type="button" className="btn btn-outline-danger" onClick={()=> { (quantity>1)?setQuantity(prev => prev-1):setQuantity(prev=>prev)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg>
              </button>
          </div>
        </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Link to='/cart'>
            <Button variant="btn btn-outline-success" onClick={()=>setCart()}>
              Add To Cart
            </Button>
          </Link>
          
        </Modal.Footer>
      </Modal>
    </div>

    
  )
}





export default PizzaProductComponent