import _ from 'lodash'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react';

import ProductsCard from './card/productsCard'
import ModalAddProduct from './modals/modalAddProduct'
import { getBranchs } from '../publics/redux/actions/branchs'
import { getCategories } from '../publics/redux/actions/categories'
import { getProductsByCategory, getAllProducts, searchProducts, postProduct, postProductsBranchs } from '../publics/redux/actions/products'

class SearchProducts extends Component {
    state = {
        products: [],
        productsPaginate: [],
        productPages: [],
        categories : [],
        branchs : [],
        limitPage: 10,
        pageOnload: 0,
        newProduct : false,
        currentPage: this.props.match.params.page
    }

    componentDidMount = async () => {
        await this.props.dispatch(getCategories())
        await this.props.dispatch(getBranchs())
        await this.setState({ categories: this.props.categories, branchs: this.props.branchs })
    }


    handleAddProduct = async (product, branchs) => {
        let { nameCategory } = this.props.match.params
        // ADD PRODUCTS AND RE RENDER DATA PRODUCTS WITH getProducts
        await this.props.dispatch(postProduct(product))
        //jika parameter nya berisi name category maka dispatcy getProducts berdasarkan nameCategory, jika tidak maka isi dengan getAllProducts
        await this.props.dispatch((nameCategory) ? getProductsByCategory(nameCategory) : getAllProducts())
        await this.setState({ newProduct: true })
        
        
        let { products } = this.state
        //mengambil data branchs dan dipisah beradasarkan key dan value, key = id_branch, value = quantity
        let id_product = products[products.length - 1].id //mengambil index terakhir dari products dengan cara length dikurang 1. kemudian ambil id nya
        let id_branchs = Object.keys(branchs)
        let quantity = Object.values(branchs)
        let newBranchs = [] //membuat newBranchs dengan array kosong

        //lalu menyatukan semua data yg terpisah dari id_product, id_branchs, dan quantity menjadi satu kedalam array newBranchs
        for (let index = 0; index < id_branchs.length; index++) {
            newBranchs.push({ id_product: id_product, id_branch: id_branchs[index], quantity: quantity[index] })
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
            title: `Product ${product.name} has been created`
        })
    }

    handlePage = async (currentPage, limitPage, search) => {
        let pageOnload = this.state.pageOnload + 1

        if (search === 'all') {
            await this.props.dispatch(getAllProducts())
            await this.setState({ productPages: this.props.products, pageOnload, newProduct: false }) //membuat page product terpisah agar jumlah pages tidak tertimpa
        } else {
            await this.props.dispatch(searchProducts(search))
            await this.setState({ productPages: this.props.products, pageOnload, newProduct: false })
        }
        const index = (currentPage - 1) * limitPage
        const productPages = _(this.state.productPages).slice(index).take(limitPage).value() 
        await this.setState({ products: productPages })
    }

    render() {
        let { products, filterProducts, pageOnload, limitPage, productPages, newProduct } = this.state
        let { page, search } = this.props.match.params

        //jalankan handle page selama ada parameter search dan pageOnload nilainya dibawah 1 atau 0. jika page onload diatas 0 maka tidak dijalankan
        if(search && pageOnload < 1){ 
            this.handlePage(page, limitPage, search)
        }else if(newProduct){
            this.handlePage(page, limitPage, search)
        }

        const totalPages = Math.ceil(productPages.length / limitPage)
        const pages = _.range(1, totalPages + 1)

        return (
            <Fragment>
                <ModalAddProduct action="Add" class="btn button-add" onAddProduct={this.handleAddProduct} categories={this.state.categories} branchs={this.state.branchs} />
                <div className="row pt-3">
                    <div className="card-group col-md-12">
                        {products.map(prd => (
                            <ProductsCard key={prd.id} product={prd} products={filterProducts} onChangeStateProducts={this.props.onChangeStateProducts} />
                        ))}
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {   //tampilkan pagination jika pages nya lebih dari 1
                            (pages.length > 1) ?
                                pages.map(numPage => (
                                    <li className={(numPage === parseInt(page)) ? "page-item active" : "page-item"} key={numPage}>
                                        <Link className="page-link" to={`/products/search/${(search !== 'all') ? search : 'all' }/page/${numPage}`} onClick={() => this.handlePage(numPage, limitPage, search)}>{numPage}</Link>
                                    </li>
                                ))
                            : ''
                        }
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        categories: state.categories.categories,
        branchs: state.branchs.branchs
    }
}

export default connect(mapStateToProps)(SearchProducts);