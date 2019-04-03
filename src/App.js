import React, { Component } from 'react';
import './App.css'

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content/>
        <Footer />
      </div>
    );
  }
}

export default App;
