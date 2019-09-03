import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import _ from 'lodash'
import {Link} from 'react-router-dom'

import ProductsCard from './card/productsCard'
import ModalAddProduct from './modals/modalAddProduct'
import {getProductsByCategory, getProductsPaginate, getAllProducts, searchProducts, postProduct, postProductsBranchs} from '../publics/redux/actions/products'
import {getCategories} from '../publics/redux/actions/categories'
import {getBranchs} from '../publics/redux/actions/branchs'

class Products extends Component {
    state = {
        products : [],
        productsPaginate: [],
        categories : [],
        branchs: [],
        currentPage : this.props.match.params.page,
        limitPage : 1,
        productPages : [],
        pageOnload : 0
    }

    componentDidMount = async () => {
        await this.props.dispatch(getCategories())
        await this.props.dispatch(getBranchs())
        // await this.props.dispatch(getProductsPaginate(0, this.state.limitPage))
        await this.setState({categories: this.props.categories, branchs: this.props.branchs})
    }

    handleAddProduct = async (product,branchs) => {

        // ADD PRODUCTS AND RE RENDER DATA PRODUCTS WITH getProducts
        await this.props.dispatch(postProduct(product))
        //jika parameter nya berisi name category maka dispatcy getProducts berdasarkan nameCategory, jika tidak maka isi dengan getAllProducts
        await this.props.dispatch((this.props.match.params.nameCategory) ? getProductsByCategory(this.props.match.params.nameCategory) : getAllProducts())
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

    handlePage = async page => {
        let pageOnload = this.state.pageOnload + 1
        let offset = (page - 1) * this.state.limitPage
        await this.props.dispatch(getProductsPaginate(offset, this.state.limitPage))
        await this.setState({ products: this.props.products, pageOnload })
    }

    productByCategory = async category => {
        let pageOnload = this.state.pageOnload + 1
        await this.props.dispatch(getProductsByCategory(category))
        await this.setState({ products: this.props.products, pageOnload })
    }

    productBySearch = async search => {
        let pageOnload = this.state.pageOnload + 1
        if (search === 'all') {
            console.log(search)
            await this.props.dispatch(getAllProducts())
            await this.setState({ products: this.props.products, productPages: this.props.products, pageOnload }) //membuat page product terpisah agar jumlah pages tidak tertimpa
        } else {
            console.log(search)
            await this.props.dispatch(searchProducts(search))
            await this.setState({ products: this.props.products, productPages: this.props.products, pageOnload })
        }
    }

    render() {
        let { products, limitPage, categories, branchs, filterProducts, productPages, pageOnload } = this.state
        let { page, nameCategory } = this.props.match.params

        //selama pageOnload kurang dari 3 maka handlePage akan terus terender. karena didalam method render itu selalu merender ulang
        if(!nameCategory && pageOnload < 3){
            this.handlePage(page)
            this.productBySearch(this.props.match.params.name)
        }else if(nameCategory && pageOnload < 3){
            this.productByCategory(nameCategory)
        }

        const totalPages = Math.ceil(productPages.length / limitPage)
        const pages = _.range(1, totalPages + 1)
        
        return (
            <Fragment>
                    <ModalAddProduct action="Add" class="btn button-add" onAddProduct={this.handleAddProduct} categories={categories} branchs={branchs} />
                    <div className="row pt-3">
                        <div className="card-group col-md-12">
                            {products.map(prd => (
                                <ProductsCard key={prd.id} product={prd} products={filterProducts} onChangeStateProducts={this.props.onChangeStateProducts} />
                                ))}
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {
                                pages.map(page => (
                                    <li className={(page === parseInt(this.props.match.params.page)) ? "page-item active" : "page-item"} key={page}><Link className="page-link" to={(nameCategory) ? `/products/category/${nameCategory}/page/${page}` : `/products/search/all/page/${page}`} onClick={()=>this.handlePage(page)}>{page}</Link></li>
                                ))
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