import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'

import ProductsCard from './card/productsCard'
import ModalAddProduct from './modals/modalAddProduct'
import {getProducts, postProduct} from '../publics/redux/actions/products'
import {getCategories} from '../publics/redux/actions/categories'
import {getBranchs} from '../publics/redux/actions/branchs'

class Products extends Component {
    state = {
        products : [],
        categories : [],
        branchs: []
    }

    componentDidMount = async () => {
        await this.props.dispatch(getProducts(this.props.match.params.nameCategory))
        await this.props.dispatch(getCategories())
        await this.props.dispatch(getBranchs())
        await this.setState({products:this.props.products, categories: this.props.categories, branchs: this.props.branchs})
    }

    handleAddProduct = async (product,branchs) => {
        console.log(branchs)
        // await this.props.dispatch(postProduct(product))
        // await this.props.dispatch(getProducts(this.props.match.params.nameCategory))
        // await this.setState({products:this.props.products})
    }

    render() {
        console.log(this.props.products)
        return (
            <Fragment>
                <ModalAddProduct action="Add" class="btn button-add" onAddProduct={this.handleAddProduct} categories={this.state.categories} branchs={this.state.branchs} />
                <div className="row pt-3">
                    <div className="card-group col-md-12">
                        {this.state.products.map(prd => (
                            <ProductsCard key={prd.id} product={prd} products={this.state.filterProducts} onChangeStateProducts={this.props.onChangeStateProducts} />
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
const mapStateToProps = state => {
    return{
        products: state.products.products,
        categories: state.categories.categories,
        branchs: state.branchs.branchs
    }
}

export default connect(mapStateToProps)(Products);