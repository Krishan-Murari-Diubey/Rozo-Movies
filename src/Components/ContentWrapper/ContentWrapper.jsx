import React from 'react'
import "./contentwrapper.scss"

const ContentWrapper = ({children}) => {
  return (
    <div className='ContentWrapper'>
      {children}
    </div>
  )
}

export default ContentWrapper
