import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'

import ProductsCard from '../cards/productsCard'
import { getProductsByCategory } from '../../publics/redux/actions/products'

class Products extends Component {
    state = {
        products : [],
        offset : 0,
        limit : process.env.LIMIT_PAGE,
    }

    componentDidMount = async() => {
        await this.props.dispatch(getProductsByCategory(this.props.match.params.category, this.state.offset, this.state.limit))
        await this.setState({ products: this.props.products })
    }

    render() {
        let { products } = this.state
        if (products.length) {
            return (
                <Fragment>
                    <ProductsCard products={ products } />
                </Fragment>
            );
        } else {
            return (
                <div className="text-center w-100" style={{ margin: '27vh 0 25.5vh 0' }}>
                    <Spinner type="grow" color="warning" />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        products : state.products.products
    }
}

export default connect(mapStateToProps)(Products);