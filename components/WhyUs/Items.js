import React, { Fragment } from 'react'
import Card from './Card'

const Items = () => {
  return (
        <Fragment>
        <div class="relative h-100 bg-gray-100">
  <div class="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
    <div class="h-2 bg-gradient-to-r from-red-500 to-orange-300">
      <Card/>
    </div>
  </div>
</div>
        </Fragment>
  )
}

export default Items