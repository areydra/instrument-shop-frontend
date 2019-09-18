import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'

import { getSearchProducts, getProducts } from '../../publics/redux/actions/products'
import ProductsCard from '../cards/productsCard'

class SearchProducts extends Component {
    state = {
        products : {}
    }

    componentDidMount = async () => {
        let { search, offset, limit } = this.props.match.params
        if(search === 'all'){
            await this.props.dispatch(getProducts(offset, limit))
        }else{
            await this.props.dispatch(getSearchProducts( search, offset, limit ))
        }
        await this.setState({ products : this.props.products })
    }

    render() {
        let { products } = this.state
        if (products.length) {
            return (
                <Fragment>
                    <ProductsCard products={products} />
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

export default connect(mapStateToProps)(SearchProducts);