import React from 'react'

const Card = () => {
  return (
    <div className='max-w-md bg-white p-5  px-2 md:px-4 flex flex-col rounded-2xl shadow-2xl z-30 space-y-5'>
        <div className='flex flex-row justify-between space-x-5'>
            <h1>logo</h1>
            <span className='text-2xl font-semibold md:text-4xl'>From Our Hives to Your Home</span>
        </div>
        <div>
            <p className='max-w-sm text-slate-700 text-2xs font-semibold px-10'>
            Our honey is harvested directly from our own hives, ensuring that it is pure and unadulterated. You can taste the difference in every jar!
            </p>
        </div>
    </div>
  )
}

export default Card