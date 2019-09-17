import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import localStorage from 'local-storage'

import Cart from '../utilities/cart'
import Wishlist from '../utilities/wishlist'
import { getProductDetails } from '../../publics/redux/actions/products'

class ProductDetails extends Component {
    state = {
        product : {}
    }

    componentDidMount = async() => {
        await this.props.dispatch(getProductDetails(this.props.match.params.product))
        await this.setState({ product: this.props.product[0] })
    }

    render() {
        let token = localStorage.get('token')
        let { product } = this.state
        if(product.id){
            return (
                <Fragment>
                    <div className="row p-3 pt-4">
                        <div className="col-12 col-md-4">
                            <img className="img-fluid" src={ product.image } alt="..." width="250px" />
                        </div>
                        <div className="col">
                            <div className="row d-flex">
                                <div className="mr-auto">
                                    <h3>{ product.name }</h3>
                                </div>
                                {
                                    (token) ? <Fragment> <Wishlist/><Cart/> </Fragment> : ''
                                }
                            </div>
                            <div className="row d-flex pt-3 border-bottom">
                                <div className="mr-auto">
                                    <h5>Rp. { product.price.toLocaleString(0) }</h5>
                                </div>
                                <span className="mr-1 align-self-center">
                                    <span><span className="text-danger" style={{ fontWeight: "bold"}}>Stok Terbatas! </span> Tersedia >{ product.qty } </span>
                                </span>
                            </div>
                            <div className="row pt-2">
                                <p className="paragraph">{ product.description }</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <div className="text-center w-100" style={{ margin: '27vh 0 25.5vh 0' }}>
                    <Spinner type="grow" color="warning" />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        product : state.products.products
    }
}

export default connect(mapStateToProps)(ProductDetails);