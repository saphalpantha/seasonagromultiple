import React from 'react'
import ProductItem from './ProductItem';
import Image from 'next/image';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';
const ProductDetails = (props) => {

    const {imgSrc, title, description, price , aboutThisItem, isInStock, id} = props.products;

    const ctx = useContext(CartContext)
    const onAddProduct = () => {
      ctx.addItem({imgUrl:imgSrc, title,description, price, isInStock ,id})
    }
  return (
    <section className='section-container bg-white'>
       <div className='container flex flex-col md:space-x-3 md:flex-row  justify-between px-2  mx-auto h-[100vh]'>
        <div className='w-[30rem] h-[30rem] p-2 flex-[0.33]'>
            <Image src={`/images/${imgSrc}.png`} className='w-[100%] h-[100%]' width={250} height={250}/>
        </div>
        <div className='flex flex-col space-y-5 flex-[0.33]'>
        <h1 className='text-3xl md:text-4x font-semibold '>{title}</h1>
          <p className='text-2xl  md:text-2xl  text-gray-800'>{description}</p>   
          <h1 className='text-2xl font-bold'>About this Item</h1>
          <div>
              <ul className='flex-flex-col space-y-3 md:space-y-4 mb-5'>
                  {aboutThisItem.map(item => {
                    return(
                      <li>{item}</li>
                    )
                  })}
              </ul>
          </div>     
        </div>
        <div className='flex flex-col flex-[0.33] space-y-5 md:space-y-7 mx-auto'>
                <span className='font-bold text-2xl text-orange-500'>{price}Rs</span>
                {isInStock ? <span className='text-2xl  md:text-2xl text-green-500'>In Stock</span> : <span className='text-2xl md:text-2xl text-orange-900'>Out of Stock</span>}
        { isInStock &&  <div className='flex flex-row space-x-2 md:space-x-5'>
                <p className='text-2xs font-semibold'>Qty</p>
            <button className='P-1 px-2 text-2xl md:text-3xl text-center py-24md:px-1 bg-orange-800 w-[3rem] rounded-md mt-6 text-white text-xl shadow-md hover:shadow-lg  active:scale-110 duration-200 '>+</button>
            <input type='number' min="1" max="10" defaultValue="10" className=' p-1 w-[5rem] rounded-md border border-slate-900 outline-none' ></input>
            <button className='P-1 px-2 text-2xl md:text-3xl text-center py-24md:px-1 bg-orange-800 w-[3rem] rounded-md mt-6 text-white text-xl shadow-md hover:shadow-lg  active:scale-110 duration-200 '>-</button>
        </div>}
        <button  onClick={onAddProduct} className={`${isInStock ? "P-2 px-2 py-4 md:px-7 bg-orange-500 w-full  md:w-fit rounded-md mt-6 text-white text-xl shadow-md  hover:shadow-lg  hover:translate-y-[-6px] duration-200": "P-2 px-2 py-4 md:px-7 bg-orange-900    w-full  md:w-fit rounded-md mt-6 text-white text-xl shadow-md hover:bg-orange-300 hover:shadow-lg   hover:translate-y-[-6px] duration-200"}`}>Add to Cart</button>
        <button className={`${isInStock ? "P-2 px-2 py-4 md:px-7 bg-orange-500 w-full  md:w-fit rounded-md mt-6 text-white text-xl shadow-md  hover:shadow-lg  hover:translate-y-[-6px] duration-200": "P-2 px-2 py-4 md:px-7 bg-orange-900    w-full  md:w-fit rounded-md mt-6 text-white text-xl shadow-md hover:bg-orange-300 hover:shadow-lg   hover:translate-y-[-6px] duration-200"}`}>Buy Now</button>
        </div>
       </div>
    </section>
  )
}

export default ProductDetails




