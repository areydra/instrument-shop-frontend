import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'
import Swal from 'sweetalert2'

import Pagination from '../utilities/pagination'
import Search from '../utilities/search'
import Header from '../layouts/header'
import Sidebar from '../layouts/sidebar'
import Footer from '../../footer'

import { getRequestProducts, getRequestProductsPaginate, deleteRequestProduct } from '../../../publics/redux/actions/requestProduct'

require('dotenv/config')

class RequestProducts extends Component {
    state = {
        requestProducts: {},
        offset: 0,
        limit: process.env.REACT_APP_LIMIT_PAGE,
        total_data: 0
    }

    componentDidMount = async () => {
        let offset = (this.props.match.params.page - 1) * this.state.limit
        await this.props.dispatch(getRequestProducts())
        await this.props.dispatch(getRequestProductsPaginate(offset, this.state.limit))
        await this.setState({ requestProducts: this.props.requestProductsPaginate, total_data: this.props.requestProducts.length })
    }

    handlePage = async(currentPage) => {
        let offset = (currentPage - 1) * this.state.limit
        await this.props.dispatch(getRequestProductsPaginate(offset, this.state.limit))
        await this.setState({ requestProducts: this.props.requestProductsPaginate })
    }

    handleDelete = async(id) => {
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
                await this.props.dispatch(deleteRequestProduct(id)).then(async () => {
                    let requestProducts = this.state.requestProducts.filter(req => req.id !== id)
                    await this.setState({ requestProducts })

                    Swal.fire(
                        'Deleted!',
                        'Your wishlist has been deleted.',
                        'success'
                    )
                })
            }
        })
    }

    render() {
        const totalPages = Math.ceil(this.state.total_data / this.state.limit)
        const pages = _.range(1, totalPages + 1)

        let { requestProducts } = this.state
        return (
            <React.Fragment >
                <Header />
                <main className="row ml-1 ml-md-0 w-100" style={{ marginTop: "11vh" }}>
                    <Sidebar />
                    <div className="col-12 col-md-10 pt-4 pr-md-4">
                        <Search />

                        <h2 className="mt-3">Request Products</h2>
                        <div className="row p-3 pt-4">
                            <table className="table mw-50">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center w-5">#</th>
                                        <th scope="col" className="text-center">Name</th>
                                        <th scope="col" className="text-center">Email</th>
                                        <th scope="col" className="text-center">Telephone</th>
                                        <th scope="col" className="text-center">Instrument</th>
                                        <th scope="col" className="text-center">Description</th>
                                        <th scope="col" className="text-center">Date</th>
                                        <th scope="col" className="text-center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (requestProducts.length) ?
                                            requestProducts.map((requestProduct, index) => (
                                                <tr key={ index }>
                                                    <td className="text-center">{index + 1}</td>
                                                    <td className="text-center">{requestProduct.name}</td>
                                                    <td className="text-center">{requestProduct.email}</td>
                                                    <td className="text-center">{requestProduct.telephone}</td>
                                                    <td className="text-center">{requestProduct.instrument}</td>
                                                    <td className="text-center">{requestProduct.description}</td>
                                                    <td className="text-center">{moment(requestProduct.created_at).format('LLL')}</td>
                                                    <td className="text-center">
                                                        <button className="btn btn-danger" onClick={ () => this.handleDelete(requestProduct.id) }>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                            : null
                                    }
                                </tbody>
                            </table>
                            {
                                (pages.length > 1) ?
                                    <Pagination pages={pages} currentPage={this.props.match.params.page} handlePage={this.handlePage} link="request-products" />
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
        requestProducts: state.requestProducts.requestProducts,
        requestProductsPaginate: state.requestProducts.requestProductsPaginate
    }
}

export default connect(mapStateToProps)(RequestProducts);