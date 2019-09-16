import React, { Component, Fragment } from 'react'

import ProductsCard from '../cards/productsCard'

class Products extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <ProductsCard />
            </Fragment>
        );
    }
}

export default Products;