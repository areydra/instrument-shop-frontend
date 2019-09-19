import { Provider } from 'react-redux'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import localStorage from 'local-storage'
import jwt from 'jsonwebtoken'

import Admin from './components/admin/main'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

import Login from './components/auth/login'
import Register from './components/auth/register'

import './App.css'
import store from './publics/redux/store'

require('dotenv/config')

class App extends Component {
  state = { 
    path: window.location.pathname.split('/')[1] // mengubah pathname menjadi array yg dipisah dari "/" dan mengambil path indeks ke 1
   }

   render() { 
     //cek jika token sudah expired maka remove token yg ada di localstorage
     jwt.verify(localStorage.get('token'), process.env.REACT_APP_SECRET_KEY, async (err, decode) => {
         (err) ? await localStorage.remove('token') : localStorage.set('user', decode)
     })

     if(this.state.path === 'admin'){
      return ( 
        <Router>
          <Provider store={ store }>
            <Route path="/admin" component={ Admin } />
          </Provider>
        </Router>
       );
    }else if(this.state.path === 'login'){
      return (
          <Router>
            <Provider store={ store }>
              <Header />
                <Route path="/login" component={ Login } />    
              <Footer />
            </Provider>
          </Router>
      )
    }else if(this.state.path === 'register'){
      return (
        <Router>
          <Provider store={ store }>
              <Header />
                <Route path="/register" component={ Register } />
              <Footer />
          </Provider>
        </Router>
      )
    }else{
      return (
        <Provider store={ store }>
          <Header />
            <Main />
          <Footer />
        </Provider>
      )
    }
  }
}
 
export default App;

// Letakan Redux disini