import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

//Layouts
import Navbar from './components/layouts/navbar'
import Main from './components/layouts/main'
import Footer from './components/layouts/footer'

function App() {
  return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Main />
          <Footer />
        </Router>
      </React.Fragment>
  );
}

export default App;
