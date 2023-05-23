import Hero from '../components/Hero/Hero'
import Mission from '../components/OurMissions/Mission'
import ProductLists from '../components/Products/ProductLists'
import { useContext } from 'react'
import CartContext from '../context/cartContext'
import Demo from '../components/Demo/Demo'
export default function Home() {
  const ctx = useContext(CartContext);
  
  return (
    <>
      {/* <Demo/> */}
      <Hero/>
      <Mission/>
      <ProductLists products={ctx.products} />
    {/* <Demo/> */}
    </>
  )
}
