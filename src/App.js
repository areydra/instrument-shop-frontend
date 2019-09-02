import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'

import './App.css';
import store from './publics/redux/store'

//Layouts
import Navbar from './components/layouts/navbar'
import Main from './components/main'
import Footer from './components/layouts/footer'

function App() {
    return (
            <React.Fragment>
              <Router>
                <Navbar />
                <Provider store={store}>
                    <Main />
                </Provider>
                <Footer />
              </Router>
            </React.Fragment>
    );
}

export default App;