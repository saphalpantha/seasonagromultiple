import React, { useContext, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CartContext from '../../context/cartContext';

const ProductItem = (props) => {

    const [qty, setQuantity] = useState(1);
    const ctx = useContext(CartContext)

    const {imgUrl, title, price,id} = props;


    const updatedItems = {
      imgUrl,title,price,id,qty
    }

    const onAddProduct = () => {
      ctx.addItem(updatedItems)
    }

    const quantityAddHandler = () => {
      if(ctx.items.length != 0){
        ctx.increment(id);
      }
    }

    const quantityDecreaseHandler = () => {
      if(ctx.items.length !== 0){
        ctx.decrement(id);
      }
    }

    const quantityInputChangeHandler = (event) => {
        const quantity = event.target.value;
        const qtyUpd = +quantity;
        setQuantity(qtyUpd) 
        
    } 


    
    const markedPrice = 250 + price * 0.3;

  return (
    <section className='section-container'>

    <div className='flex flex-col items-center justify-center pt-1 md:pt-2 space-y-5'>
        <div className='w-[20rem] h-[20rem] p-2'>
        <Link href={`/${id}`}><Image src={`/images/${imgUrl}.png`} className='w-[100%] h-[100%]' width={250} height={250} /></Link>
        </div>
        <h1 className='text-2xl md:text-3xl'>{title}</h1>
        <span className='font-thin text-gray-900 text-2xl md:text-3xl line-through decoration-orange-600  '>{markedPrice}</span>

        <span className='text-bold  font-semibold text-3xl md:text-4xl'>{price}</span>
        <p className='text-2xs font-semibold'>Qty</p>
        <div className='flex flex-row space-x-2 md:space-x-5'>

            <button onClick={quantityAddHandler} className='P-1 px-2 text-2xl md:text-3xl text-center py-24md:px-1 bg-orange-800 w-[3rem] rounded-md mt-6 text-white text-xl shadow-md hover:shadow-lg  active:scale-110 duration-200 '>+</button>
            <input onClick={quantityDecreaseHandler} type='number' min="1" max="10"  defaultValue="1" step="1" className=' p-1 w-[5rem] rounded-md border border-slate-900 outline-none' onChange={quantityInputChangeHandler} ></input>
            <button className='P-1 px-2 text-2xl md:text-3xl text-center py-24md:px-1 bg-orange-800 w-[3rem] rounded-md mt-6 text-white text-xl shadow-md hover:shadow-lg  active:scale-110 duration-200 '>-</button>
        </div>
        <button onClick={onAddProduct}  className='P-2 px-2 py-4 md:px-7 bg-orange-500 w-full  md:w-fit rounded-md mt-6 text-white text-xl shadow-md hover:bg-orange-300 hover:shadow-lg  hover:translate-y-[-6px] duration-200 '>Add to Cart</button>
    </div>
    </section>
  )
}

export default ProductItem



