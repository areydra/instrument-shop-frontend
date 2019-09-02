import React, { Component } from 'react';
import ModalProduct from './modals/modalProduct'
import {connect} from 'react-redux'
import { getProductDetails, deleteProduct } from '../publics/redux/actions/products';
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
        }
    }

    componentDidMount = async() => {
        await this.props.dispatch(getProductDetails(this.props.match.params.name))
        await this.props.dispatch(getCategoryDetail(this.props.product.id_category))
        await this.setState({ product: this.props.product, category: this.props.categories })
    }

    deleteProduct = async id => {
        await this.props.dispatch(deleteProduct(id, this.state.category.name))
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
                            <h4 style={{ fontWeight: 'bold' }}>{name}</h4>
                        </div>
                        <div className="col-md-4 text-right">
                            <ModalProduct action="Edit" class="btn btn-secondary btn-sm mr-1"/>
                            <button className="btn btn-danger btn-sm ml-1" onClick={()=>this.deleteProduct(id)}>Delete</button>
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
                            <input type="text" className="form-control" value={''} readOnly />
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3">
                            Quantity
                    </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" value={''} readOnly />
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
 
const mapStateToProps = state => {
    return{
        product : state.products.products[0],
        categories : state.categories.categories[0]
    }
}

export default connect(mapStateToProps)(ProductDetails);