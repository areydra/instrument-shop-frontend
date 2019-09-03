import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import Swal from 'sweetalert2'

import ProductsCard from './card/productsCard'
import ModalAddProduct from './modals/modalAddProduct'
import {getProducts, getAllProducts, searchProducts, postProduct, postProductsBranchs} from '../publics/redux/actions/products'
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

        if (this.props.match.params.name) {
            if (this.props.match.params.name === 'all') {
                await this.props.dispatch(getAllProducts())
                await this.setState({products : this.props.products})
            } else {
                await this.props.dispatch(searchProducts(this.props.match.params.name))
                await this.setState({products : this.props.products})
            }
        }
    }

    handleAddProduct = async (product,branchs) => {

        // ADD PRODUCTS AND RE RENDER DATA PRODUCTS WITH getProducts
        await this.props.dispatch(postProduct(product))
        //jika parameter nya berisi name category maka dispatcy getProducts berdasarkan nameCategory, jika tidak maka isi dengan getAllProducts
        await this.props.dispatch((this.props.match.params.nameCategory) ? getProducts(this.props.match.params.nameCategory) : getAllProducts())
        await this.setState({products:this.props.products})

        //mengambil data branchs dan dipisah beradasarkan key dan value, key = id_branch, value = quantity
        let id_product = this.state.products[this.state.products.length - 1].id //mengambil index terakhir dari products dengan cara length dikurang 1. kemudian ambil id nya
        let id_branchs = Object.keys(branchs)
        let quantity = Object.values(branchs)
        let newBranchs = [] //membuat newBranchs dengan array kosong
        
        //lalu menyatukan semua data yg terpisah dari id_product, id_branchs, dan quantity menjadi satu kedalam array newBranchs
        for (let index = 0; index < id_branchs.length; index++) {
            newBranchs.push({ id_product: id_product, id_branch: id_branchs[index], quantity: quantity[index]})
        }

        //kemudian dispatch atau post data productsBranchsQty sesuai index newBranchs(data yg dimasukan)
        for (let index = 0; index < newBranchs.length; index++) {
            await this.props.dispatch(postProductsBranchs(newBranchs[index]))
        }
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: `Product ${this.state.products[this.state.products.length - 1].name} has been created`
        })
    }

    render() {
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