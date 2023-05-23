import React, { useContext } from 'react'
import CartItem from './CartItem'
import CartContext from '../../context/cartContext'




const CartLists = () => {


  const ctx = useContext(CartContext);


  if(ctx.items.length != 0){
    return (
      <div className='flex flex-col space-y-5 md:space-y-10 mt-2 md:mt-5 mb-10'>
          <h1 className='text-6xl md:text-4xl text-left font-semibold text-center'>My Carts</h1>
          {ctx.items.map(item => {
              return(
                  <CartItem key={item.id} id={item.id} price={item.price} description={item.description}  qty={item.qty} title={item.title} imgUrl={item.imgUrl} />
              )
          })}
  
  
      </div>
    )

  }
  else{
    return <div className='flex flex-col space-y-5 md:space-y-10 mt-2 md:mt-5 mb-10'>
      <h1 className='text-2xl md:text-3xl text-left font-semibold text-center text-gray-700'>No Items In Carts</h1>
    </div>
  }
}

export default CartLists