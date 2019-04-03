import React from 'react'

import QuoteBox from './QuoteBox/QuoteBox'

const contentStyle = {
    height:'80vh',
    backgroundColor: 'var(--main-brand-color)',
    color: 'var(--main-brand-color)'
    
}

const Content = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-trans" style={contentStyle}>
      <QuoteBox></QuoteBox>
    </div>
  )
}

export default Content
