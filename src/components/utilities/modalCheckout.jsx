import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'

import { Button, Modal, ModalBody } from 'reactstrap';
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

        return (
            <React.Fragment>
                <Button className="btn btn-success mb-3 ml-auto" onClick={this.toggle}>Checkout</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-lg modal-dialog-centered">
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
