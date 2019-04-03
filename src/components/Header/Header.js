import React from 'react'

const headerStyle = {
    backgroundColor: '#333',
    color: 'var(--main-brand-color)',
    padding: '10px 20px',
    textAlign: 'center',
    height:'10vh',
    transition: 'color 2s'
}

const Header = () => {
  return (
    <nav style={headerStyle}>
        <h1>Quotes Machine</h1>
    </nav>
  )
}

export default Header
