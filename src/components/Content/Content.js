import React from 'react'

import QuoteBox from './QuoteBox/QuoteBox'

const contentStyle = {
    height:'80vh',
    backgroundColor: '#B76944'
}

const Content = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={contentStyle}>
      <QuoteBox></QuoteBox>
    </div>
  )
}

export default Content
