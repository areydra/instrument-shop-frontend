import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './home';
import Products from './products';
import ProductDetails from './productDetails'
import Search from './search/search'

class Main extends Component {
    render() { 
        return ( 
            <div className="container">
                <Router>
                    <Search />
                    <Route path="/" exact component={Home} />
                    <Route path="/products/category/:nameCategory" component={Products}/>
                    <Route path="/products/search/:name" component={Products} />
                    <Route path="/product-details/:name" component={ProductDetails} />
                </Router>
            </div>

         );
    }
}
 
export default Main;