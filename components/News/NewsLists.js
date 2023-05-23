import React, { Fragment } from 'react'
import NewsItem from './NewsItem'
import Link from 'next/link'
const NewsLists = () => {
  return (
    <Fragment>

    <div className='container w-6xl flex p-2 md:flex-row h-[45rem] overflow-y-scroll  mr-[2rem] mx-auto md:max-w-sm  bg-gray-100 shadow-lg justify-center md:justify-normal'>
    <div className='p-6 mx-auto md:p-1 mt-2'>
        <h1 className='text-4xl leading-8 px-10 tracking-tight font-semibold'>News</h1>
        <div className='flex flex-col  mt-0 md:mt-5 px-2 py-4  justify-center items-center'>
                {[1,2,3,4,5].map(item => (<NewsItem/>)
                )}
        </div>
        <div className='mx-auto'>
        <Link className="text-center uppercase font-bold bg-orange-200 text-slate-700 mx-auto py-3 px-4" href="/">Show More News</Link>

        </div>
    </div>
</div>

                    </Fragment>
  )
}

export default NewsLists