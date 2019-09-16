import React, { Component, Fragment } from 'react'

import ProductsCard from '../cards/productsCard'

class SearchProducts extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <ProductsCard />
            </Fragment>
        );
    }
}

export default SearchProducts;