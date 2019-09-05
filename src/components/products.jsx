import _ from 'lodash'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import React, { Component, Fragment } from 'react';

import ProductsCard from './card/productsCard'
import ModalAddProduct from './modals/modalAddProduct'
import {getBranchs} from '../publics/redux/actions/branchs'
import {getCategories} from '../publics/redux/actions/categories'
import {getProductsByCategory, getAllProducts, postProduct, postProductsBranchs} from '../publics/redux/actions/products'

class Products extends Component {
    state = {
        products : [],
        productsPaginate: [],
        categories : [],
        branchs: [],
        currentPage : this.props.match.params.page,
        limitPage : 10,
        productPages : [],
        pageOnload : 0,
        newProduct : false
    }

    componentDidMount = async () => {
        await this.props.dispatch(getCategories())
        await this.props.dispatch(getBranchs())
        await this.setState({categories: this.props.categories, branchs: this.props.branchs})
    }

    handleAddProduct = async (product,branchs) => {

        // ADD PRODUCTS AND RE RENDER DATA PRODUCTS WITH getProducts
        await this.props.dispatch(postProduct(product))
        //jika parameter nya berisi name category maka dispatcy getProducts berdasarkan nameCategory, jika tidak maka isi dengan getAllProducts
        await this.props.dispatch((this.props.match.params.nameCategory) ? getProductsByCategory(this.props.match.params.nameCategory) : getAllProducts())
        await this.setState({ products: this.props.products, newProduct: true })

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
            title: `Product ${product.name} has been created`
        })
    }

    handlePage = async (currentPage, limitPage, category) => {
        let pageOnload = this.state.pageOnload + 1
        await this.props.dispatch(getProductsByCategory(category))
        await this.setState({ productPages: this.props.products, pageOnload, newProduct: false })

        const index = (currentPage - 1) * limitPage
        //_(items) masukan items kedalam lodash
        //.slice(index) mulai data dari index, bisa juga dengan cara .slice(items, index)
        //.take(limitPage) ambil data sesuai limit, 
        //.value() convert dari lodash obj menjadi reguler array
        const productPages = _(this.state.productPages).slice(index).take(limitPage).value()
        await this.setState({ products: productPages })
    }

    render() {
        let { products, limitPage, categories, branchs, filterProducts, productPages, pageOnload, newProduct } = this.state
        let { page, nameCategory } = this.props.match.params

        //selama pageOnload kurang dari 3 maka handlePage akan terus terender. karena didalam method render itu selalu merender ulang
        if(nameCategory && pageOnload < 1){
            this.handlePage(page, limitPage, nameCategory)
        }else if(newProduct){
            this.handlePage(page, limitPage, nameCategory)
        }

        const totalPages = Math.ceil(productPages.length / limitPage)
        const pages = _.range(1, totalPages + 1)
        
        return (
            <Fragment>
                    <ModalAddProduct action="Add" class="btn button-add" onAddProduct={this.handleAddProduct} categories={categories} branchs={branchs} />
                    <div className="row pt-3">
                        <div className="card-group col-md-12">
                            {products.map(prd => (
                                <ProductsCard key={prd.id} product={prd} products={filterProducts} onChangeStateProducts={this.props.onChangeStateProducts} prevPath={this.props.location.pathname} />
                                ))}
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                        {   //tampilkan pagination jika pages nya lebih dari 1
                            (pages.length > 1) ?
                                pages.map(numPage => (
                                    <li className={(numPage === parseInt(page)) ? "page-item active" : "page-item"} key={numPage}>
                                        <Link className="page-link" to={`/products/category/${nameCategory}/page/${numPage}`} onClick={() => this.handlePage(numPage, limitPage, nameCategory)}>{numPage}</Link>
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
    return{
        products: state.products.products,
        categories: state.categories.categories,
        branchs: state.branchs.branchs
    }
}

export default connect(mapStateToProps)(Products);