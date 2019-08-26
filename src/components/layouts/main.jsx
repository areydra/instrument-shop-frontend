import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomeCard from '../homeCard';
import DetailsCard from '../detailsCard';
import ProductDetails from '../productDetails'
import Search from '../search'

const Container = () => {
    return ( 
        <div className="container">
            <Router>
                <Search />
                <Route path="/" exact component={HomeCard}/>
                <Route path="/details-category" component={DetailsCard}/>
                <Route path="/product-details" component={ProductDetails} />
            </Router>
        </div>
     );
}
 
export default Container;