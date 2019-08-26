import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddProduct extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Button className={this.props.class} onClick={this.toggle} style={{border: 'none'}}>{this.props.action} Product</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className +' modal-dialog-centered modal-lg'}>
                    <ModalHeader toggle={this.toggle} style={{borderBottom: 'none'}}>{this.props.action} Data</ModalHeader>
                    <ModalBody>
                        <form action="">
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Product Name</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Category</p>
                                </div>
                                <div className="col-md-3">
                                    <select name="" id="" className="form-control">
                                        <option value="null" selected hidden>Category</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Branch</p>
                                </div>
                                <div className="col-md-3">
                                    <select name="" id="" className="form-control">
                                        <option value="null" selected hidden>Branch</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Qty</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Price</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Description</p>
                                </div>
                                <div className="col-md-6">
                                    <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter style={{borderTop: 'none'}}>
                        <button type="button" className={this.props.class} onClick={this.toggle}>{this.props.action}</button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default AddProduct;