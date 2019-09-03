import React, { Component } from 'react';
import Swal from 'sweetalert2'

import ModalProduct from './modals/modalProduct'
import {connect} from 'react-redux'
import { getProductDetails, getProductsByBranchs, deleteProduct } from '../publics/redux/actions/products';
import { getCategoryDetail } from '../publics/redux/actions/categories';


class ProductDetails extends Component {
    state = {
        product: {
            id: 0,
            id_category: 0,
            image_url: "",
            name: "",
            price: 0,      
            description: ""
        },
        category: {
            id_category: 0
        },
        branchs : []
    }

    componentDidMount = async() => {
        //Mengambil data product sesuai name
        await this.props.dispatch(getProductDetails(this.props.match.params.name))
        await this.props.dispatch(getCategoryDetail(this.props.product.id_category))
        await this.setState({ product: this.props.product, category: this.props.categories })

        //menngambil product qty by branch 
        await this.props.dispatch(getProductsByBranchs(this.state.product.id))
        await this.setState({ branchs: this.props.branchs })
    }

    deleteProduct = async id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                })

                Toast.fire({
                    type: 'success',
                    title: `Product ${this.state.product.name} has been deleted`
                })
                
                setTimeout(()=>{
                    this.props.dispatch(deleteProduct(id, this.state.category.name))
                },1000)
            }
        })
    }

    render() { 
        let {id, name, description, image_url, price} = this.state.product

        return ( 
            <div className="row col-md-12" style={{ paddingTop: '100px' }}>
                <div className="col-md-4">
                    <img src={image_url} alt="COKS" />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 style={{ fontWeight: 'bold' }}>{name}</h3>
                        </div>
                        <div className="col-md-4 text-right">
                            <ModalProduct action="Edit" class="btn btn-secondary btn-sm mr-1"/>
                            <button className="btn btn-danger btn-sm ml-1" onClick={()=>this.deleteProduct(id)}>Delete</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h6 style={{color: '#F5D372'}}>{ this.state.category.name }</h6>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3">
                            Price
                        </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" value={price} readOnly />
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Branch</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.branchs.map(branch => (
                                            <tr key={branch.id}>
                                                <td>{branch.branch}</td>
                                                <td>{branch.quantity}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return{
        product : state.products.products[0],
        branchs : state.products.products,
        categories : state.categories.categories[0]
    }
}

export default connect(mapStateToProps)(ProductDetails);