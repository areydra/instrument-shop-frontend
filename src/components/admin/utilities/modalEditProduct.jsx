import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalAddProduct extends Component {
    state = {
        modal: false,
        product: {},
    };

    toggle = async() => {
        await this.setState(prevState => ({
            product: this.props.product,
            modal: !prevState.modal
        }));
    }

    handleForms = event => {
        let newForms = { ...this.state.product } //membuat newForms dengan data key value state.baru
        newForms[event.target.name] = event.target.value //kemudian isi newForms sesuai key object. Contoh: newForms['id'] = 20102020

        //event.target.nama_attribute di tag html, contoh event.target.name = mengambil data yg ada di attribute name (input name="jodi") jadi akan mengambil value name yg berisi jodi
        this.setState({ product: newForms })
    }

    render() {
        return (
            <React.Fragment>
                <Button className="btn btn-success" onClick={this.toggle} style={{ border: 'none' }}>Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + ' modal-dialog-centered modal-lg'}>
                    <ModalHeader toggle={this.toggle} style={{ borderBottom: 'none' }}>Edit Data</ModalHeader>
                    <ModalBody>
                        <form action="">
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Product Name</p>
                                </div>
                                <div className="col-md-9">
                                    <input required type="text" name="name" className="form-control" value={ this.state.product.name } onChange={this.handleForms} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Category</p>
                                </div>
                                <div className="col-md-4">
                                    <select required className="form-control" name="id_category" onChange={this.handleForms}>
                                        <option value={this.state.product.id_category} hidden>{this.state.product.category}</option>                                        {
                                            (this.props.categories.length) ?
                                                this.props.categories.map(category => (
                                                    <option value={category.id} key={category.id}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</option>
                                                ))
                                                : null
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Price</p>
                                </div>
                                <div className="col-md-4">
                                    <input required type="number" className="form-control" name="price" value={this.state.product.price} onChange={this.handleForms} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Quantity</p>
                                </div>
                                <div className="col-md-4">
                                    <input required type="number" className="form-control" name="qty" value={this.state.product.qty} onChange={this.handleForms} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Description</p>
                                </div>
                                <div className="col-md-9">
                                    <textarea required name="description" id="" cols="30" rows="5" className="form-control" value={this.state.product.description} onChange={this.handleForms} ></textarea>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Image Url</p>
                                </div>
                                <div className="col-md-9">
                                    <input required type="text" className="form-control" name="image" value={this.state.product.image} onChange={this.handleForms} />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter style={{ borderTop: 'none' }}>
                        <button type="button" className="btn btn-success" onClick={() => { this.props.handleEditProduct(this.state.product, this.props.index); this.setState({ modal: false }) }}>Edit Product</button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalAddProduct;