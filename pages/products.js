import React, { useContext } from 'react'
import ProductLists from '../components/Products/ProductLists'
import CartContext from '../context/cartContext'



const products = () => {
  
  const ctx = useContext(CartContext);  
  return ( 
    <ProductLists products={ctx.products} />
  )
}



export default products