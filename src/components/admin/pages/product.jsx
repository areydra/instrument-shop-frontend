import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import _ from 'lodash'

import Pagination from '../utilities/pagination'
import Search from '../utilities/search'
import ModalAddProduct from '../utilities/modalAddProduct'
import ModalEditProduct from '../utilities/modalEditProduct'
import Header from '../layouts/header'
import Sidebar from '../layouts/sidebar'
import Footer from '../../footer'

import { getCategories } from '../../../publics/redux/actions/categories'
import { postProduct, getProducts, getAllProducts, patchProduct, deleteProduct } from '../../../publics/redux/actions/products'
require('dotenv/config')

class Product extends Component {
    state = { 
        products : {},
        categories : {},
        total_data: 0,
        limit: process.env.REACT_APP_LIMIT_PAGE,
        offset: 0
     }

     componentDidMount = async() => {
         let offset = (this.props.match.params.page - 1) * this.state.limit

         await this.props.dispatch(getCategories())
         await this.props.dispatch(getAllProducts())
         await this.props.dispatch(getProducts(offset, this.state.limit))
         await this.setState({ categories: this.props.categories, total_data: this.props.productsData.length, products: this.props.products })
     }

     handleAddProduct = async product => {
         await this.props.dispatch(postProduct(product)).then(async() => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                type: 'success',
                title: `Create product ${product.name} successfully`
            })

            if(this.state.products.length < 10){
                let products = []
                this.state.products.map(product => products.push(product))
                products.push(...this.props.postProduct)
                await this.setState({ products })
            }
         })
     }

    handleEditProduct = async (product,index) => {
        await this.props.dispatch(patchProduct(product.id, product)).then(async () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                type: 'success',
                title: `Edit product ${product.name} successfully`
            })

            await this.setState(prevState => ({ ...prevState.products[index] = product }))
        })
    }

    handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.value) {
                await this.props.dispatch(deleteProduct(id)).then(async () => {
                    let products = this.state.products.filter(product => product.id !== id)
                    await this.setState({ products })

                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    )

                    if (this.state.products.length < 1) {
                        await this.props.dispatch(getProducts(this.state.offset, this.state.limit))
                        await this.setState({ products: this.props.products })
                    } 
                })
            }
        })
    }

    handlePage = async (currentPage) => {
        let offset = (currentPage - 1) * this.state.limit
        await this.props.dispatch(getProducts(offset, this.state.limit))
        await this.setState({ products: this.props.products })
    }

     render() { 
        const totalPages = Math.ceil(this.state.total_data / this.state.limit)
        const pages = _.range(1, totalPages + 1)

        let { products } = this.state
        return (
            <React.Fragment >
                <Header />
                <main className="row ml-1 ml-md-0 w-100" style={{ marginTop: "11vh" }}>
                    <Sidebar />
                    <div className="col-12 col-md-10 pt-4 pr-md-4">
                        <Search />
                        <div className="row p-3 pt-4">
                            <div className="row col-12">
                                <div className="col-6">
                                    <h2>Products</h2>
                                </div>
                                <div className="col-6 text-right">
                                    <ModalAddProduct categories={ this.state.categories } handleAddProduct={ this.handleAddProduct } />
                                </div>
                            </div>
                            <table className="table mw-50">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center w-5">#</th>
                                        <th scope="col" className="text-center">Image</th>
                                        <th scope="col" className="text-center" width="100px">Name</th>
                                        <th scope="col" className="text-center">Price</th>
                                        <th scope="col" className="text-center">Description</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" className="text-center">Category</th>
                                        <th scope="col" className="text-center" width="170px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (products.length) ?
                                            products.map((product, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{index + 1}</td>
                                                    <td className="text-center"><img src={ product.image } alt="..." width="50"/></td>
                                                    <td className="text-center">{(product.name.length > 30) ? product.name.substr(0, 30) + '...' : product.name}</td>
                                                    <td className="text-center">{product.price}</td>
                                                    <td className="text-center">{(product.description.length > 30) ? product.description.substr(0, 30) + '...' : product.description}</td>
                                                    <td className="text-center">{product.qty}</td>
                                                    <td className="text-center">{product.category}</td>
                                                    <td className="text-center">
                                                        <ModalEditProduct product={product} index={index} categories={this.state.categories} handleEditProduct={this.handleEditProduct} />
                                                        <button className="btn btn-danger ml-1" onClick={() => this.handleDelete(product.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                            : null
                                    }
                                </tbody>
                            </table>
                            {
                                (pages.length > 1) ?
                                    <Pagination pages={pages} currentPage={this.props.match.params.page} handlePage={this.handlePage} link="products" />
                                    : null
                            }
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment >
        );
   }
}

const mapStateToProps = state => {
    return {
        categories : state.categories.categories,
        products : state.products.products,
        productsData: state.products.productsData,
        postProduct : state.products.postProduct
    }
}

export default connect(mapStateToProps)(Product);