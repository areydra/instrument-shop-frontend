import React, { Component } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalAdmin extends Component {
    state = { 
        modal: false
     }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() { 
        return ( 
            <React.Fragment>
                <Button className="btn btn-success mb-3 ml-auto" onClick={this.toggle}>Add Product</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-lg modal-dialog-centered">
                    <ModalHeader toggle={this.toggle}>Add Product</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control" defaultValue="NULL">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default ModalAdmin;