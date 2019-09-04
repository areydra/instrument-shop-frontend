import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getBranchsByProduct, getBranchs } from '../../publics/redux/actions/branchs'
import { getCategories } from '../../publics/redux/actions/categories'
import { getProductDetails } from '../../publics/redux/actions/products'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalProduct extends Component {
    state = {
        modal: false,
        product: [],
        branchs : [],
        allBranchs: [],
        categorySelected : '',
        idProductBranchs : [],
        newBranch : []
    }

    componentDidMount = async () => {
        await this.props.dispatch(getProductDetails(this.props.name))
        await this.props.dispatch(getCategories())
        await this.props.dispatch(getBranchs())
        let filterCategories = this.props.categories.filter(cat => cat.id === this.props.product.id_category)
        await this.setState({ allBranchs: this.props.branchs, categorySelected: filterCategories[0].name, product: this.props.product })

        await this.props.dispatch(getBranchsByProduct(this.state.product.id))
    }

    toggle = () => {
        // console.log(this.props.branchs)
        this.setState(prevState => ({
            modal: !prevState.modal,
            branchs : this.props.branchs
        }));
        console.log(this.state.branchs)
    }

    handleInput = event => {
        let newProduct = {...this.state.product}
        newProduct[event.target.name] = event.target.value
        this.setState({ product: newProduct })
    } 
 
    handleBranchs = async event => {
        let newBranchs = {...this.state.newBranch}
        let idProductBranchs = {...this.state.idProductBranchs}
        newBranchs[parseInt(event.target.name)] = event.target.value
        idProductBranchs[event.target.name] = event.target.id
        await this.setState({ newBranch: newBranchs, idProductBranchs })
    }
    
    render() {
        let { id_category, name, description, price, image_url } = this.state.product   
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
                                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleInput} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Category</p>
                                </div>
                                <div className="col-md-3">
                                    <select value={id_category} name="id_category" className="form-control" onChange={this.handleInput}>
                                        <option value={id_category} hidden>{this.state.categorySelected}</option>
                                        {
                                            this.props.categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))
                                        }
                                   </select>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Price</p>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" name="price" value={price} onChange={this.handleInput} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Description</p>
                                </div>
                                <div className="col-md-6">
                                    <textarea cols="30" rows="5" className="form-control" name="description" value={description} onChange={this.handleInput} ></textarea>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Image Url</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="image_url" value={image_url} onChange={this.handleInput} />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Availible In :</p>
                                </div>
                            </div>
                            {
                                (this.state.branchs.length) ?
                                    this.state.branchs.map(branch => (
                                        <div className="row pt-3" key={branch.id}>
                                            <div className="col-md-2"></div>
                                            <div className="col-md-2" style={{ marginRight: '-55px !important' }}>
                                                <p style={{ fontWeight: '500' }}>{branch.name}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <input type="number" className="form-control" name={branch.id_branch} id={branch.id} placeholder={branch.quantity} onChange={this.handleBranchs} />
                                            </div>
                                        </div>
                                    ))
                                : ''
                            }
                        </form>
                    </ModalBody>
                    <ModalFooter style={{borderTop: 'none'}}>
                        <button type="button" className={this.props.class} onClick={() => this.props.onUpdate(this.state.product, this.state.newBranch, this.state.idProductBranchs ) }>Edit</button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return{
        product : state.products.products[0],
        branchs : state.branchs.branchs,
        categories : state.categories.categories
    }
}

export default connect(mapStateToProps)(ModalProduct);