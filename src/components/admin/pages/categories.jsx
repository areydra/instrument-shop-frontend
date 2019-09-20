import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import _ from 'lodash'

import Pagination from '../utilities/pagination'
import Search from '../utilities/search'
import ModalAddCategory from '../utilities/modalAddCategory'
import ModalEditCategory from '../utilities/modalEditCategory'
import Header from '../layouts/header'
import Sidebar from '../layouts/sidebar'
import Footer from '../../footer'

import { postCategory, getCategories, getCategoriesPaginate, patchCategory, deleteCategory } from '../../../publics/redux/actions/categories'

require('dotenv/config')

class Categories extends Component {
    state = {
        categories: {},
        total_data: 0,
        limit: process.env.REACT_APP_LIMIT_PAGE,
        offset: 0
    }

    componentDidMount = async () => {
        let offset = (this.props.match.params.page - 1) * this.state.limit

        await this.props.dispatch(getCategories())
        await this.props.dispatch(getCategoriesPaginate(offset, this.state.limit))
        await this.setState({ categories: this.props.categoriesPaginate, total_data: this.props.categories.length })
    }

    handleAddCategory = async category => {
        await this.props.dispatch(postCategory(category)).then(async () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                type: 'success',
                title: `Create category ${category.name} successfully`
            })

            if (this.state.categories.length < this.state.limit) {
                let categories = []
                this.state.categories.map(category => categories.push(category))
                categories.push(this.props.postCategory)
                await this.setState({ categories })
            }

            if(this.state.categories.length >= this.state.limit){
                await this.props.dispatch(getCategories())
                await this.setState({ total_data: this.props.categories.length })
            }
        })
    }

    handleEditCategory = async (category, index) => {
        await this.props.dispatch(patchCategory(category.id, category)).then(async () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                type: 'success',
                title: `Edit category ${category.name} successfully`
            })

            await this.setState(prevState => ({ ...prevState.categories[index] = category }))
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
                await this.props.dispatch(deleteCategory(id)).then(async () => {
                    let categories = this.state.categories.filter(category => category.id !== id)
                    await this.setState({ categories })

                    Swal.fire(
                        'Deleted!',
                        'Your category has been deleted.',
                        'success'
                    )

                    if (this.state.categories.length < 1) {
                        await this.props.dispatch(getCategories(this.state.offset, this.state.limit))
                        await this.setState({ categories: this.props.categories, total_data: this.props.categories.length })
                    }

                })
            }
        })
    }

    handlePage = async (currentPage) => {
        let offset = (currentPage - 1) * this.state.limit
        await this.props.dispatch(getCategoriesPaginate(offset, this.state.limit))
        await this.setState({ categories: this.props.categoriesPaginate })
    }

    render() {
        const totalPages = Math.ceil(this.state.total_data / this.state.limit)
        const pages = _.range(1, totalPages + 1)

        let { categories } = this.state
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
                                    <h2>categories</h2>
                                </div>
                                <div className="col-6 text-right">
                                    <ModalAddCategory handleAddCategory={this.handleAddCategory} />
                                </div>
                            </div>
                            <table className="table mw-50">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center w-5">#</th>
                                        <th scope="col" className="text-center w-25">Image</th>
                                        <th scope="col" className="text-center w-50">Name</th>
                                        <th scope="col" className="text-center w-25"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (categories.length) ?
                                            categories.map((category, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{index + 1}</td>
                                                    <td className="text-center"><img src={category.image} alt="..." width="50" /></td>
                                                    <td className="text-center">{category.name}</td>
                                                    <td className="text-center">
                                                        <ModalEditCategory category={category} index={index} handleEditCategory={this.handleEditCategory} />
                                                        <button className="btn btn-danger ml-1" onClick={() => this.handleDelete(category.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                            : null
                                    }
                                </tbody>
                            </table>
                            {
                                (pages.length > 1) ?
                                    <Pagination pages={pages} currentPage={this.props.match.params.page} handlePage={this.handlePage} link="categories" />
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
        categories: state.categories.categories,
        postCategory: state.categories.postCategory,
        categoriesPaginate: state.categories.categoriesPaginate,
    }
}

export default connect(mapStateToProps)(Categories);