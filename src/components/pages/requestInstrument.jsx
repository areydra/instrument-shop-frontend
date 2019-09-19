import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { postRequestProduct } from '../../publics/redux/actions/requestProduct'

class RequestInstrument extends Component {
    state = {
        request: {
            name: '',
            email: '',
            instrument: '',
            telephone: '',
            description: ''
        }
    }

    handleForm = async event => {
        let request = { ...this.state.request }
        request[event.target.name] = event.target.value

        await this.setState({ request })
    }

    handleSendRequest = async() => {
        await this.props.dispatch(postRequestProduct(this.state.request)).then(() => {
            Swal.fire(
                'Send',
                'Request product has been send.',
                'success'
            )
            this.setState(prevState => ({ ...prevState.request['instrument'] = '', ...prevState.request['description'] = '' }) )
        })
    }

    render() {
        console.log(this.state.request)
        let handleForm = this.handleForm
        let { name, email, instrument, telephone, description } = this.state.request
        return (
            <main className="">
                <div className="container p-4">
                    <div className="row">
                        <h2 className="w-100 text-center">Request Instrument</h2>
                    </div>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSendRequest}
                    >
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-7">
                                <div className="row">
                                    <div className="col-12 col-md-6 p-1 mb-5">
                                        <TextValidator
                                            label="Name"
                                            className="form-control"
                                            onChange={handleForm}
                                            name="name"
                                            value={name}
                                            validators={['required', 'minStringLength: 5', 'maxStringLength: 35']}
                                            errorMessages={['this field is required', 'name must be 5 characters', 'name max 35 characters']}
                                        />
                                        {/* <input type="text" className="form-control" placeholder="Name" name="name" onChange={ this.handleForm } value={ this.state.user.name } /> */}
                                    </div>
                                    <div className="col-12 col-md-6 p-1 mb-5">
                                        <TextValidator
                                            label="Email"
                                            className="form-control"
                                            onChange={handleForm}
                                            name="email"
                                            value={email}
                                            validators={['required', 'isEmail', 'maxStringLength: 50']}
                                            errorMessages={['this field is required', 'email is not valid', 'email max 50 characters']}
                                        />
                                        {/* <input type="email" className="form-control" placeholder="Email" name="email" onChange={ this.handleForm } value={ this.state.user.email } /> */}
                                    </div>
                                    <div className="col-12 col-md-6 p-1 mb-5">
                                        <TextValidator
                                            type="instrument"
                                            label="Instrument Name"
                                            className="form-control"
                                            onChange={handleForm}
                                            name="instrument"
                                            value={instrument}
                                            validators={['required', 'minStringLength: 5', 'maxStringLength: 50']}
                                            errorMessages={['this field is required', 'password must be 5 characters', 'password max 50 characters']}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 p-1 mb-5">
                                        <TextValidator
                                            label="Phone number"
                                            className="form-control"
                                            onChange={handleForm}
                                            name="telephone"
                                            value={telephone}
                                            validators={['required', 'isNumber', 'minStringLength: 10', 'maxStringLength: 13']}
                                            errorMessages={['this field is required', 'Phone number must be number', 'number must be 10', 'number max 13']}
                                        />
                                    </div>
                                    <div className="col-12 col-md-12 p-1 mb-5">
                                        <TextValidator
                                            multiline
                                            rows="5"
                                            label="Description"
                                            className="form-control"
                                            onChange={handleForm}
                                            name="description"
                                            value={description}
                                            validators={['required', 'minStringLength: 5']}
                                            errorMessages={['this field is required', 'Description must be 5 character']}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center pt-2 mt-5">
                            <div className="col-12 col-md-7 p-1">
                                <button type="submit" className="btn background-cream font-weight-bold button-hover" style={{ width: "100%" }}>Send Request</button>
                            </div>
                        </div>
                    </ValidatorForm>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        requestProduct: state.requestProducts.requestProducts
    }
}

export default connect(mapStateToProps)(RequestInstrument);
