import React, { Component, Fragment } from 'react';

import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

import './App.css'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <Header />
          <Main />
        <Footer />
      </Fragment>
     );
  }
}
 
export default App;

// Letakan Redux disini