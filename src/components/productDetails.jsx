import React, { Component } from 'react';
import ModalProduct from './modals/modalProduct'

import products from '../data/products'

class ProductDetails extends Component {
    state = { 
        products : products
     }

    render() { 
        let product = this.state.products.filter(product => product.name === this.props.match.params.name) 
        let { id, name, description, image_url, availible_in, price, quantity } = product[0]

        return ( 
            <div className="row col-md-12" style={{ paddingTop: '100px' }}>
                <div className="col-md-4">
                    <img src={image_url} alt="COKS" />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 style={{ fontWeight: 'bold' }}>{name}</h4>
                        </div>
                        <div className="col-md-4 text-right">
                            <ModalProduct action="Edit" class="btn btn-secondary btn-sm mr-1" />
                            <button className="btn btn-danger btn-sm ml-1">Delete</button>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3">
                            Available in
                    </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" value={availible_in} readOnly />
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3">
                            Quantity
                    </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" value={quantity} readOnly />
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
                </div>
            </div>
         );
    }
}
 
export default ProductDetails;