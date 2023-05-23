import React from 'react'
import ProductItem from './ProductItem'


const ProductLists = ({products}) => {
  return (
    <div>
      <h1 className='text-center  text-4xl md:text-6xl font-semibold font-mono text-gray-900'>PRODUCTS</h1>
      <p className='text-center'>Nulla in incididunt magna veniam id qui consequat.Ut est magna Lorem id reprehenderit cillum adipisicing eu reprehenderit aliqua elit dolor nulla nulla.</p>
      <div className='flex flex-col md:flex-row  px-4 mx-auto max-w-6xl'>
      {products?.map(item => {
        return(
            <ProductItem key={item.id} id={item.id} imgUrl={item.imgSrc} title={item.title} price={item.price} qty={item.qty}/>
          )
        })}
    </div>
        </div>
  )
}

export default ProductLists