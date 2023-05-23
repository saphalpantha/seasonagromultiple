import React, { Fragment } from 'react'
import classes from './Hero.module.css'
const Hero = () => {
  return (
    <Fragment>
        <section id="hero" className="scroll-effect">
            <div className='section-container'>
                <div className='container max-w-6xl  flex flex-col-reverse md:flex-row   md:space-x-5 px-2 py-2  py-0 mx-auto'>
                    <div className='flex flex-col space-y-5 mt-12 px-5  text-left'>
                        <p className='text-2xl text-left md:max-w-lg  font-extralight text-gray-800 leading-4'>You are in the right place</p>
                        <h1 className='tracking-tight text-black mt-2 md:mt-4 text-5xl  font-bold md:text-7xl leading-5'>HONEYBEE</h1>
                        <p className='w-6xl md:max-w-[40rem] mt-2 md:mt-5 text-2xs leading-8 md:text-xl '>adipisicing magna in cupidatat culpa amet nulla.

                                Velit nisi tempor anim dolor ullamco irure excepteur pariatur ipsum. Lorem eiusmod nulla deserunt anim excepteur sint do exercitation. Proident qui ipsum ut deserunt enim non in ut.</p>
                                <div className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-y-6'>
                                <button className='P-2 px-5 py-4 md:px-7 bg-orange-500 w-full  md:w-fit rounded-md mt-6 text-white text-xl shadow-md hover:bg-orange-300 hover:shadow-lg hover:translate-y-[-6px] duration-200 '>LEARN MORE</button>
                                <button className='P-2 px-5 py-3 md:px-7 bg-orange-900 w-full md:w-fit rounded-md mt-6 text-white text-xl shadow-md hover:bg-orange-300 hover:shadow-lg hover:translate-y-[-6px] duration-200 '>Create Account</button>
                                </div>
                    </div>
                    <div className='relative p-7'>
                        <div className='md:w-sm '>
                        <img className='bg-contain w-[100%] h-[100%] select-none' src="/images/hero-img.png" alt="img"></img>
                        </div>
                        <div className='absolute top-1  right-10 p-0 md:right-5 md:top-5 pd:5 group'>
                        <p className='text-4xl font-serif text-gray-700 md:text-6xl'>Honey</p>
                        <span className='text-2xl font-bold text-orange-900 px-2'>100% pure</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Hero