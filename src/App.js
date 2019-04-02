import React, { Component } from 'react';

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

const appContainer = {
  // maxHeight:'100vh',
  // minHeight:'100vh'
  // height:'100vh'
  
}

class App extends Component {
  render() {
    return (
      <div className="App" style={appContainer}>
        <Header />
        <Content/>
        <Footer />
      </div>
    );
  }
}

export default App;
