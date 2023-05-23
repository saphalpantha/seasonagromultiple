import React, { Fragment } from 'react'
import Header from './Header'

const Layout = (props) => {
  return (
    <Fragment>
      
    <Header/>
    <div className='relative'>

    {props.children}
    </div>
    </Fragment>
  )
}
    
export default Layout