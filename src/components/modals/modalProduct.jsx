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

    handleChangeCategory = event => {
        this.setState({ product: {id: this.state.product.id,id_category: event.target.value,name: this.state.product.name,availible_in: this.state.product.availible_in,image_url: this.state.product.image_url,description: this.state.product.description,price: this.state.product.price,quantity: this.state.product.quantity,image_url: this.state.product.image_url} })
    }

    handleChangeName = event => {
        this.setState({ product: {id: this.state.product.id,id_category: this.state.product.id_category,name: event.target.value,availible_in: this.state.product.availible_in,image_url: this.state.product.image_url,description: this.state.product.description,price: this.state.product.price,quantity: this.state.product.quantity,image_url: this.state.product.image_url} })
    }

    handleChangeAvailibleIn = event => {
        this.setState({product: {id: this.state.product.id,id_category: this.state.product.id_category,name: this.state.product.name,availible_in: event.target.value,image_url: this.state.product.image_url,description: this.state.product.description,price: this.state.product.price,quantity: this.state.product.quantity,image_url: this.state.product.image_url} })
    }

    handleChangeImageUrl = event => {
        this.setState({product: {id: this.state.product.id,id_category: this.state.product.id_category,name: this.state.product.name,availible_in: this.state.product.availible_in,image_url: event.target.value,description: this.state.product.description,price: this.state.product.price,quantity: this.state.product.quantity,image_url: this.state.product.image_url} })
    }

    handleChangeDescription = event => {
        this.setState({product: {id: this.state.product.id,id_category: this.state.product.id_category,name: this.state.product.name,availible_in: this.state.product.availible_in,image_url: this.state.product.image_url,description: event.target.value,price: this.state.product.price,quantity: this.state.product.quantity,image_url: this.state.product.image_url} })
    }

    handleChangePrice = event => {
        this.setState({product: {id: this.state.product.id,id_category: this.state.product.id_category,name: this.state.product.name,availible_in: this.state.product.availible_in,image_url: this.state.product.image_url,description: this.state.product.description,price: event.target.value,quantity: this.state.product.quantity,image_url: this.state.product.image_url} })
    }

    handleChangeQuantity = event => {
        this.setState({product: {id: this.state.product.id,id_category: this.state.product.id_category,name: this.state.product.name,availible_in: this.state.product.availible_in,image_url: this.state.product.image_url,description: this.state.product.description,price: this.state.product.price,quantity: event.target.value,image_url: this.state.product.image_url} })
    }
    
    handleChangeImageUrl = event => {
        this.setState({ product: { id: this.state.product.id, id_category: this.state.product.id_category, name: this.state.product.name, availible_in: this.state.product.availible_in, image_url: this.state.product.image_url, description: this.state.product.description, price: this.state.product.price, quantity: this.state.product.quantity, image_url: event.target.value } })
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
                                    <input type="text" className="form-control" value={(this.props.product !== undefined) ? this.state.product.name : ''} onChange={this.handleChangeName} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Category</p>
                                </div>
                                <div className="col-md-3">
                                    <select value={(this.props.product !== undefined) ? this.state.product.id_category : ''} className="form-control" onChange={this.handleChangeCategory}>
                                        <option value={(this.props.product !== undefined) ? this.state.product.id_category : ''} selected hidden>{(this.props.product !== undefined) ? this.state.product.id_category : 'Category'}</option>
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
                                    <select name="" value={(this.props.product !== undefined) ? this.state.product.availible_in : ''} id="" className="form-control" onChange={this.handleChangeAvailibleIn}>
                                        <option value={(this.props.product !== undefined) ? this.state.product.availible_in : ''} selected hidden>{(this.props.product !== undefined) ? this.state.product.availible_in : 'Availible In'}</option>
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
                                    <input type="text" className="form-control" value={(this.props.product !== undefined) ? this.state.product.quantity : ''} onChange={this.handleChangeQuantity} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Price</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" value={(this.props.product !== undefined) ? this.state.product.price : ''} onChange={this.handleChangePrice} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Description</p>
                                </div>
                                <div className="col-md-6">
                                    <textarea name="" id="" cols="30" rows="5" className="form-control" value={(this.props.product !== undefined) ? this.state.product.description : ''} onChange={this.handleChangeDescription} ></textarea>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Image Url</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" value={(this.props.product !== undefined) ? this.state.product.image_url : ''} onChange={this.handleChangeImageUrl} />
                                </div>
                            </div>

                        </form>
                    </ModalBody>
                    <ModalFooter style={{borderTop: 'none'}}>
                        <button type="button" className={this.props.class} onClick={() => this.props.onEdit(this.state.product).then(this.setState({ modal: false }))}>{this.props.action}</button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalProduct;