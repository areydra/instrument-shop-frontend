import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalProduct extends Component {
    state = {
        modal: false,
        product: this.props.product
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
                                    <input type="text" className="form-control" value={''} onChange={''} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Category</p>
                                </div>
                                <div className="col-md-3">
                                    <select value={''} className="form-control" onChange={''}>
                                        <option value={''} selected hidden>{'Category'}</option>
                                        <option value='1'>Violin</option>
                                        <option value='2'>Guitar</option>
                                        <option value='3'>Bass</option>
                                        <option value='4'>Harp</option>
                                        <option value='5'>Ukulele</option>
                                   </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Availible In</p>
                                </div>
                                <div className="col-md-3">
                                    <select name="" value={''} id="" className="form-control" onChange={''}>
                                        <option value={''} selected hidden>{}</option>
                                        <option value="Bogor">Bogor</option>
                                        <option value="Jakarta">Jakarta</option>
                                        <option value="Bekasi">Bekasi</option>
                                        <option value="Bandung">Bandung</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Qty</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" value={''} onChange={''} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Price</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" value={''} onChange={''} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Description</p>
                                </div>
                                <div className="col-md-6">
                                    <textarea name="" id="" cols="30" rows="5" className="form-control" value={''} onChange={''} ></textarea>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Image Url</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" value={''} onChange={''} />
                                </div>
                            </div>

                        </form>
                    </ModalBody>
                    <ModalFooter style={{borderTop: 'none'}}>
                        <button type="button" className={this.props.class} onClick={''}>{}</button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalProduct;