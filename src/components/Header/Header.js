import React from 'react'

const headerStyle = {
    backgroundColor: '#333',
    padding: '10px 20px',
    textAlign: 'center',
    height:'10vh'
}

const Header = () => {
  return (
    <nav style={headerStyle}>
        <h1>Quotes Machine</h1>
    </nav>
  )
}

export default Header
