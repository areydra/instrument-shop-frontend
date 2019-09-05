import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './home';
import Products from './products';
import ProductDetails from './productDetails'
import Search from './search/search'
import SearchProducts from './searchProducts'

class Main extends Component {
    render() { 
        return ( 
            <div className="container" style={{marginTop:'7%'}}>
                <Router>
                    <Search />
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/products/category/:nameCategory" exact component={Products}/> */}
                    <Route path="/products/category/:nameCategory/page/:page" exact component={Products}/>
                    {/* <Route path="/products/search/:name" exact component={Products} /> */}
                    <Route path="/products/search/:search/page/:page" exact component={SearchProducts} />
                    <Route path="/product-details/:name" component={ProductDetails} />
                </Router>
            </div>

         );
    }
}
 
export default Main;