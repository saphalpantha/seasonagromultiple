import React, { Fragment } from 'react'
import Navlinks from './Navigation/Navlinks'

const Header = (props) => {
  return (
    <Fragment>
    <div className='container snap- snap-end justify-between dark:bg-black  items-center justify-center  max-w-full px-7 py-5  bg-white border  bottom-3 border-gray-200   md:py-1 '>
        <h1 className='font-bold text-4xl py-2 text-orange-400 drop-shadow-2xl shadow-black  md:text-4xl'>SIJAN AGRO MULTIPLE</h1>
        <div className='flex flex-col w-6xl items-center justify-center mb-5 px-2 py-0 md:flex-row justify-between'>
            <Navlinks/>
            <h1 className='text-6xl text-center flex-start md:hidden'>≡</h1>
        </div>
      </div>
    </Fragment>
  )
}
 
export default Header