import Link from 'next/link'
import React, { Fragment, useContext, useState } from 'react'
import Modal from '../../UI/Model/Model'
import CartLists from '../../Cart/CartLists';
import CartContext from '../../../context/cartContext';


const Navlinks = () => {
  const [showCart, setShowCart] = useState(false);

  const ctx = useContext(CartContext)

  const numberOfCartItems = ctx.items.reduce((curNum, item) => {
    return curNum + item.qty
  }, 0)
  const cartOpenHandler = () => {
      setShowCart(prev => !prev)
  }

  const cartCloseHandler= () => {
    setShowCart(prev => !prev)
  }
  return (
    <Fragment>
    <nav className='w-6xl md:w-full mt-2 scroll-smooth'>
        <ul className='hidden flex flex-col justify-center font-semibold tracking-wide items-center md:flex-row px-2 md:py-5 text-black text-2xs md:2xl md:px-2 justify-between md:space-x-5 sm:space-x-0 md:flex lg:px-12 xl:space-x-22'>
            <li><Link className='link_effect text-orange-500 hover:text-black' href="#hero">Home</Link></li>
            <li><Link className='link_effect' href="/products">Products</Link></li>
            <li><Link  className='link_effect group' href="/#mission">About us</Link></li>
            <li><Link className='link_effect group' href="/#">Be an Employee</Link></li>
            <li><Link className='link_effect group' href="/#">Programs</Link></li>
            <li><Link className='link_effect group' href="/checkout">Checkout</Link></li>
            {<div className='relative  pt-3  rounded-md'>
                <li onClick={cartOpenHandler} className='text-2xl link_effect cursor-pointer z-10'>🛒 {numberOfCartItems} </li> </div>}

            <span className='w-auto px-3 py-2 bg-orange-300 rounded-md hover:bg-orange-500 hover:text-gray-100 duration-150 shadow-sm'><Link href="/contact">Contact us</Link></span>
        </ul>
    </nav>
{   showCart &&   <div onClick={cartCloseHandler} className='bg-orange-500 w-[4rem] h-[4rem]  rounded-full absolute  top-5  right-0 md:right-[27%]  z-50 hover:rotate-[360deg] hover:bg-orange-900 duration-300 cursor-pointer'>
      <h1 className='text-4xl absolute top-2 left-4 text-white  font-bold text-center'>✘</h1>
    </div>}
    {showCart && <Modal className=''>
        <div className='flex flex-col space-y-2 text-left px-5 md:px-4 h-[50vh]' >
            <div>
              <CartLists/>
            </div>
        </div>
      </Modal>}

    </Fragment>

   ) }


export default Navlinks