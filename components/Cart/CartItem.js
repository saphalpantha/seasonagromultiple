import React, { useContext } from 'react'
import CartContext from '../../context/cartContext'
const CartItem = (props) => {
  const {id, title, description , qty, price, imgUrl}  = props
  const ctx = useContext(CartContext)

  const quantityAddHandler = () => {
    ctx.increment(id);
  }

  const quantityDecreaseHandler = ( ) => {
    ctx.decrement(id);
  }

  const removeFromCartHandler = () => {
    ctx.removeItem(id)
  }
  return (
    <div className='container max-w-6xl flex flex-col justify-evenly md:flex-row  justify-center items-center  space-x-3 p-2 md:p-0  space-y-[5rem] md:space-y-0 ' >
      <div className='w-[12rem] h-[12rem]'>
        <img  className='w-[100%] h-[100%' src={`/images/${imgUrl}.png`}/>
      </div>
      <div className='flex flex-col shadow-2xl rounded-2xl bg-white p-2 md:p-4 relative h-[15rem] space-y-3  w-[22rem] pt-5 md:pt-1 md:w-[35rem] mt-5'>
        <h1 className=' text-2xl md:text-3xl font-bold tracking-wide text-black'>{title}</h1>
        <span className='text-2xl text-gray-500'>{`${price}/kg`}</span>
        <div className='max-w-md space-x-3'>
          <button onClick={quantityDecreaseHandler} className='text-center px-4 md:px-5 p-2 outline-none shadow-md rounded-md bg-orange-200 active:scale-105 duration-200  text-orange-600  duration-200 font-medium'>-</button>
          <span className='text-2xl font-medium'>{`x${qty}`}</span>
          <button onClick={quantityAddHandler} className='text-center px-4 md:px-5 p-2 outline-none shadow-md rounded-md bg-orange-200 active:scale-105 duration-200  text-orange-600  duration-200 font-medium'>+</button>
        </div>
        <button onClick={removeFromCartHandler} className='text-center px-2 md:px-5 p-2  outline-none shadow-md rounded-md bg-orange-500 hover:bg-orange-900 text-white duration-200 font-medium'>Remove</button>
      <span className=' absolute text-center font-4xl md:font-5xl text-orange-600  bg-orange-100 px-10 py-3 rounded-3xl font-bold top-0 right-2'>{`${price*qty}Rs`}</span>
      </div>
    </div>
  )
}

export default CartItem