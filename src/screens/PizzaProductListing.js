import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { SET_PIZZA_PRODUCTS } from '../Redux/constants/actionType'
import PizzaProductComponent from '../Components/PizzaProductComponent'
const PizzaProductListing = () => {


  /**
   * - fetches all the pizza products from the store and stores in into the products 
   *
   * @param {*} state
   * @return {*} array of pizza products
   */
  const products = useSelector(state => {
    return state.allProducts.pizzaProducts
  });

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
    .then(response => dispatch({type:SET_PIZZA_PRODUCTS,payload:response.data}))
    .catch(error => console.log(error))

  },[])
  
  return (
    <div className='row'>
      {products.map(product=>{
        return <div className='col-sm-3' key={product.id}>
          <div >
            <PizzaProductComponent product= {product} />
          </div>
        </div>
      })}
    </div>
  )
}

export default PizzaProductListing