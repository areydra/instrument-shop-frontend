import React, { Component } from 'react'
import { connect } from 'react-redux'
import localStorage from 'local-storage'
import Swal from 'sweetalert2'

import { getCartsByUser, patchCarts, deleteCart } from '../../publics/redux/actions/carts'


class Cart extends Component {
    state = { 
        carts : {},
        user : {}
     }

     componentDidMount = async() => {
        if(!localStorage.get('token')) window.location = '/login'

         let user = localStorage.get('user')
         await this.props.dispatch(getCartsByUser(user.id))
         await this.setState({ carts: this.props.carts, user })
     }

     handleForm = async(id, index, event) => {
         if(event.target.value > 0){
             let carts = {...this.state.carts[index], qty: event.target.value}
             await this.setState(prevState => ({ ...prevState.carts[index] = carts }))
             await this.props.dispatch(patchCarts(id, carts))
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
                await this.props.dispatch(deleteCart(id)).then(async () => {
                    let carts = this.state.carts.filter(cart => cart.id !== parseInt(this.props.cart.id))
                    await this.setState({ carts })

                    Swal.fire(
                        'Deleted!',
                        'Your cart has been deleted.',
                        'success'
                    )
                })
            }
        })
    }

    render() { 
        let { carts } = this.state
        let total = 0
        if ( carts.length ) carts.map(cart => total += (cart.price*cart.qty))

        return ( 
            <div className="container p-4">
                <h3>Carts Lists :</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="w-5 text-center">#</th>
                            <th scope="col" className="w-50 text-center">Product</th>
                            <th scope="col" className="w-5 text-center">Quantity</th>
                            <th scope="col" className="w-50 text-center">Price</th>
                            <th scope="col" className="w-5 text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(carts.length) ?
                            carts.map((cart, index) => (
                                <tr key={ index+1 }>
                                    <td>{ index+1 }</td>
                                    <td className="text-center">
                                        <img src={ cart.image } className="img-fluid mr-3" width="50px" alt="..." />
                                        <span>{ cart.product }</span>
                                    </td>
                                    <td>
                                        <input type="number" className="form-control" value={ cart.qty } onChange={ event => this.handleForm(cart.id, index, event) } />
                                    </td>
                                    <td className="text-center">
                                        Rp. { (cart.price * cart.qty).toLocaleString(3)  }
                                    </td>
                                    <td>
                                        <p className="text-danger cursor-pointer" onClick={() => this.handleDelete(cart.id)}>Delete</p>
                                    </td>
                                </tr>
                            ))
                            : null
                        }
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-7 col-md-6 align-self-center" style={{paddingTop: '1vh'}}>
                        <h5>Total : Rp. { total.toLocaleString(3) }</h5>
                    </div>
                    <div className="col-5 col-md-6 text-right">
                        <button className="btn btn-success">Check out</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        carts : state.carts.carts,
        cart: state.carts.carts
    }
}

export default connect(mapStateToProps)(Cart);