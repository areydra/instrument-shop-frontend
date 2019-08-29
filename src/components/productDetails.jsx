import React, { Component } from 'react';
import ModalProduct from './modals/modalProduct'

class ProductDetails extends Component {
    state = { 
        products : [],
        product : null,
        delete: false
     }

     componentDidMount = async () => {
         await this.setState({ products: this.props.location.state.products })
     }

     handleEdit = async product => {
        await this.setState({ product })
     }

     handleDelete = () => {
         this.setState({ delete : true })
     }

    render() { 
        let product = this.state.products.filter(product => product.name === this.props.match.params.name) 
        if(product[0] === undefined){
            return (
                <div className="alert alert-danger" style={{ marginTop: '100px' }}>
                    <h1><strong>Alert!</strong></h1><h3> 404 not found</h3>
                </div>
            )
        }


        if(this.state.delete){
            return (
            <div className="alert alert-danger" style={{ marginTop: '100px' }}>
                <h1><strong>Alert!</strong></h1><h3> Data has been deleted</h3>
            </div>
            )
        }

        return ( 
            <div className="row col-md-12" style={{ paddingTop: '100px' }}>
                <div className="col-md-4">
                    <img src={(this.state.product) ? this.state.product.image_url : product[0].image_url} alt="COKS" />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 style={{ fontWeight: 'bold' }}>{(this.state.product) ? this.state.product.name : product[0].name}</h4>
                        </div>
                        <div className="col-md-4 text-right">
                            <ModalProduct action="Edit" class="btn btn-secondary btn-sm mr-1" product={product[0]} onEdit={this.handleEdit} />
                            <button className="btn btn-danger btn-sm ml-1" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <p>{(this.state.product) ? this.state.product.description : product[0].description}</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3">
                            Available in
                    </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" value={(this.state.product) ? this.state.product.availible_in : product[0].availible_in} readOnly />
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3">
                            Quantity
                    </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" value={(this.state.product) ? this.state.product.quantity : product[0].quantity} readOnly />
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3">
                            Price
                    </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" value={(this.state.product) ? this.state.product.price : product[0].price} readOnly />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductDetails;