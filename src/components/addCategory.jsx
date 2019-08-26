import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddCategory extends Component {
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
                <Button className="btn button-add" onClick={this.toggle} style={{border: 'none'}}>Add Category</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + ' modal-dialog-centered modal-lg'}>
                    <ModalHeader toggle={this.toggle}>ADD Category</ModalHeader>
                    <ModalBody>
                        <form action="">
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Name</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-3" style={{ marginRight: '-55px !important' }}>
                                    <p style={{ fontWeight: 'bold' }}>Image URL</p>
                                </div>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <div className="modal-footer" style={{ border: 'none !important' }}>
                            <button type="button" className="btn" style={{ padding: '5px 27px', fontWeight: 'bold', color: 'white', borderRadius: '6px', backgroundColor: '#E28935' }} onClick={this.toggle}>Add</button>
                        </div>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default AddCategory;