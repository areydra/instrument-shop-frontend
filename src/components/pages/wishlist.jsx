import React, { Component } from 'react'
import localStorage from 'local-storage'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import ModalCheckout from '../utilities/modalCheckout'
import { getWishlistsByUser, addToCart, addPatchToCart, deleteWishlist } from '../../publics/redux/actions/wishlist'
import { getCartDetails } from '../../publics/redux/actions/carts'

class Wishlist extends Component {
    state = {
        wishlists : {}
    }

    componentDidMount = async() => {
        if (!localStorage.get('token')) window.location = '/login'

        let user = await localStorage.get('user')
        await this.props.dispatch(getWishlistsByUser(user.id))
        await this.setState({ wishlists: this.props.wishlists })
    }

    deleteWishlistForCart = async id_wishlist => {
        await this.props.dispatch(deleteWishlist(id_wishlist)).then(async () => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            })

            Toast.fire({
                type: 'success',
                title: 'Succes add to cart'
            })

            let wishlists = this.state.wishlists.filter(wishlist => wishlist.id !== parseInt(this.props.wishlist.id))
            await this.setState({ wishlists })
        })

    }

    handleAddToCart = async (wishlist) => {
        await this.props.dispatch(getCartDetails(wishlist.id_user, wishlist.id_product))
        if(this.props.cart.length){
            let qty = wishlist.qty + this.props.cart[0].qty
            let newWishlist = { ...wishlist, qty }
            await this.props.dispatch(addPatchToCart(this.props.cart[0].id, newWishlist)).then(() => {
                this.deleteWishlistForCart(wishlist.id)
            })
        }else{
            await this.props.dispatch(addToCart(wishlist)).then(async() => {
                this.deleteWishlistForCart(wishlist.id)
            })
        }
    }

    handleDelete = async id => {
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
                await this.props.dispatch(deleteWishlist(id)).then(async () => {
                    let wishlists = this.state.wishlists.filter(wishlist => wishlist.id !== parseInt(this.props.wishlist.id))
                    await this.setState({ wishlists })

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
        let { wishlists } = this.state
        let total = 0
        if(wishlists.length) wishlists.map(wishlist => total+=wishlist.price)

        return (
            <div className="container p-4">
                <h3>Wishlist Lists :</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="w-5 text-center">#</th>
                            <th scope="col" className="w-50 text-center">Product</th>
                            <th scope="col" className="w-5 text-center">Quantity</th>
                            <th scope="col" className="w-25 text-center">Price</th>
                            <th scope="col" className="w-25 text-center"></th>
                            <th scope="col" className="w-5 text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (wishlists.length) ?
                                wishlists.map((wishlist, index) => (
                                    <tr key={ index+1 }>
                                        <th scope="row">{ index+1 }</th>
                                        <td className="text-center">
                                            <img src={ wishlist.image } className="img-fluid mr-3" width="50px" alt="..." />
                                            <span>{ wishlist.product }</span>
                                        </td>
                                        <td><input type="number" className="form-control text-center" value={ wishlist.qty } readOnly /></td>
                                        <td className="text-center">Rp. { wishlist.price.toLocaleString(3) }</td>
                                        <td>
                                            <p className="text-primary cursor-pointer" onClick={ () => this.handleAddToCart(wishlist) }>Add To Cart</p>
                                        </td>
                                        <td>
                                            <p className="text-danger cursor-pointer" onClick={ () => this.handleDelete(wishlist.id) }>Delete</p>
                                        </td>
                                    </tr>                             
                                ))
                            : null
                        }
                    </tbody>
                </table>
                    {
                        (wishlists.length) ?
                            <div className="row">
                                <div className="col-7 col-md-6 align-self-center" style={{ paddingTop: '1vh' }}>
                                    <h5>Total : Rp. {total.toLocaleString(3)}</h5>
                                </div>

                                <div className="col-5 col-md-6 text-right">
                                    <ModalCheckout products={ wishlists } />
                                </div>
                            </div>
                        : null
                    }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart : state.carts.carts,
        wishlist : state.wishlists.wishlists,
        wishlists : state.wishlists.wishlists
    }
}

export default connect(mapStateToProps)(Wishlist);