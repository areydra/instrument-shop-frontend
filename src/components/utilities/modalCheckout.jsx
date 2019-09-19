import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'

import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { postTransaction } from '../../publics/redux/actions/transactions'
import { deleteCart } from '../../publics/redux/actions/carts'
import Print from '../pages/print'

class ModalCheckout extends Component {
    state = {
        modal: false,
        products : {}
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    componentDidMount = async() => {
        await this.setState({ products: this.props.products })
    }

    handleCheckout = async() => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        await this.props.dispatch(postTransaction(this.state.products)).then(() => {
            Toast.fire({
                type: 'success',
                title: 'Succes checkout'
            }).then(async() => {
                await this.props.dispatch(deleteCart(this.state.products))
                window.location = '/transactions'
            })        
        })
    }

    render() {
        let { products } = this.state
        let total = 0
        if (products.length) products.map(product => total += product.price)

        return (
            <React.Fragment>
                <Button className="btn btn-success mb-3 ml-auto" onClick={this.toggle}>Checkout</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-lg modal-dialog-centered">
                    {/* <ModalBody>
                        <h3 className="mb-5">Checkout Lists :</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-5 text-center">#</th>
                                    <th scope="col" className="w-50 text-center">Product</th>
                                    <th scope="col" className="w-5 text-center">Quantity</th>
                                    <th scope="col" className="w-25 text-center">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (products.length) ?
                                        products.map((product, index) => (
                                            <tr key={index + 1}>
                                                <th scope="row">{index + 1}</th>
                                                <td className="text-center">
                                                    <img src={product.image} className="img-fluid mr-3" width="50px" alt="..." />
                                                    <span>{product.product}</span>
                                                </td>
                                                <td><input type="number" className="form-control text-center" value={product.qty} readOnly /></td>
                                                <td className="text-center">Rp. {product.price.toLocaleString(3)}</td>
                                            </tr>
                                        ))
                                        : null
                                }
                            </tbody>
                        </table>
                        <h5 className="mt-5">Total : Rp. {total.toLocaleString(3)}</h5>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={() => this.handleCheckout()}>Process</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button> 
                    </ModalFooter> */}
                    <ModalBody>
                        <Print products={ products } handleToggle={ this.toggle } handleCheckout={ () => this.handleCheckout() } />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        transactions : state.transactions.transactions
    }
}

export default connect(mapStateToProps)(ModalCheckout);
