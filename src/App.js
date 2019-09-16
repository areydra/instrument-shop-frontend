import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Admin from './components/admin/main'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

import './App.css'

class App extends Component {
  state = { 
    path: window.location.pathname.split('/')[1] // mengubah pathname menjadi array yg dipisah dari "/" dan mengambil path indeks ke 1
   }

  render() { 
    if(this.state.path === 'admin'){
      return ( 
        <Router>
          <Route path="/admin" component={ Admin } />
        </Router>
       );
    }else{
      return (
        <Fragment>
          <Header />
            <Main />
          <Footer />
        </Fragment>
      )
    }
  }
}
 
export default App;

// Letakan Redux disini