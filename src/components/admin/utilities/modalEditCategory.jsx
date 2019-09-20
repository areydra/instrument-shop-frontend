import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalEditCategory extends Component {
    state = {
        modal: false,
        category: {
            id: '',
            name: '',
            image: ''
        }
    };

    toggle = () => {
        this.setState(prevState => ({
            category : this.props.category,
            modal: !prevState.modal
        }));
    }

    handleChange = async event => {
        let newCategory = { ...this.state.category }
        newCategory[event.target.name] = event.target.value
        this.setState({ category: newCategory })
    }

    render() {
        return (
            <React.Fragment>
                <Button className="btn btn-success" onClick={this.toggle}>Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + ' modal-dialog-centered modal-lg'}>
                    <ModalHeader toggle={this.toggle}>ADD Category</ModalHeader>
                    <ModalBody>
                        <div className="row pt-3">
                            <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                <p style={{ fontWeight: 'bold' }}>Name</p>
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="form-control" name="name" onChange={this.handleChange} value={ this.state.category.name } />
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                <p style={{ fontWeight: 'bold' }}>Image URL</p>
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="form-control" name="image" onChange={this.handleChange} value={ this.state.category.image } />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="modal-footer" style={{ border: 'none !important' }}>
                            <button type="button" className="btn btn-success" onClick={() => { this.props.handleEditCategory(this.state.category, this.props.index); this.setState({ modal: false }) }}>Add Category</button>
                        </div>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalEditCategory;