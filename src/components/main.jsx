import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './home';
import Products from './products';
import ProductDetails from './productDetails'
import Search from './search/search'

const Container = () => {
    return ( 
        <div className="container">
            <Router>
                <Search />
                <Route path="/" exact component={Home}/>
                <Route path="/products/category/:id" component={Products}/>
                <Route path="/product-details/:name" component={ProductDetails} />
            </Router>
        </div>
     );
}
 
export default Container;