import React, { Component, Fragment } from 'react'
import jwt from 'jsonwebtoken'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import localStorage from 'local-storage'
import Swal from 'sweetalert2'

import Cart from '../utilities/cart'
import Wishlist from '../utilities/wishlist'
import { getProductDetails } from '../../publics/redux/actions/products'
import { postCart } from '../../publics/redux/actions/carts'
import { postWishlist } from '../../publics/redux/actions/wishlist'


class ProductDetails extends Component {
    state = {
        user : {},
        product : {}
    }

    componentDidMount = async() => {
        let user = await (localStorage.get('token')) ? jwt.decode(localStorage.get('token'), process.env.REACT_APP_SECRET_KEY) : {}
        await this.props.dispatch(getProductDetails(this.props.match.params.product))
        await this.setState({ product: this.props.product[0], user })
    }

    handleAddToCart = (id_user, id_product) => {
        this.props.dispatch(postCart({ id_user, id_product, qty : 1 })).then(() => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                type: 'success',
                title: 'Added to Cart'
            })
        })
    }

    handleAddToWishlist = (id_user, id_product) => {
        this.props.dispatch(postWishlist({ id_user, id_product, qty: 1 })).then(() => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                type: 'success',
                title: 'Added to Wishlist'
            })
        })
    }

    render() {
        let token = localStorage.get('token')
        let { product, user } = this.state
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
                                    (token) ? 
                                        <Fragment> 
                                            <Wishlist addToWishlist={ this.handleAddToWishlist } id_user={ user.id } id_product={ product.id } />
                                            <Cart addToCart={ this.handleAddToCart } id_user={ user.id } id_product={ product.id } /> 
                                        </Fragment> 
                                    : ''
                                }
                            </div>
                            <div className="row d-flex pt-3 border-bottom">
                                <div className="mr-auto">
                                    <h5>Rp. { product.price.toLocaleString(3) }</h5>
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