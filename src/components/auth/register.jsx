import React, { Component } from 'react'
import { connect } from 'react-redux'
import localStorage from 'local-storage'
import Swal from 'sweetalert2'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { register } from '../../publics/redux/actions/auth'

class Register extends Component {
    state = { 
        user : {
            name : '',
            email : '',
            password : '',
            rePassword : '',
            address : '',
            telephone : ''
        },
        error : {}
     }

    componentDidMount = () => {
        if (localStorage.get('token')) {
            window.location = '/'
        }
    }

    handleForm = async event => {
        let user = {...this.state.user}
        user[event.target.name] = event.target.value

        await this.setState({ user })
    }   

    handleRegister = async() => {
        let user = { ...this.state.user, password:'', rePassword:'' }

        if(this.state.user.password !== this.state.user.rePassword){
            await this.setState({ user, error: "password does not match with re-password" }) 
        }else{
            await this.props.dispatch(register(this.state.user)).then(() => {
                localStorage.set('token', this.props.user.token)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000
                })

                Toast.fire({
                    type: 'success',
                    title: 'Register success'
                }).then( async ()=>{
                    await this.setState({ error: {} })
                    window.location = '/'
                })

            })
        }
        
    }

    render() { 
        let handleForm = this.handleForm
        let { name, email, password, rePassword, address, telephone } = this.state.user
        return (
            <main style={{ margin: "12.5vh 0 1vh 0" }}>
                <div className="container p-4">
                    <div className="row">
                        <h2 className="w-100 text-center">Register</h2>
                    </div>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleRegister}
                    >
                    <div className="row justify-content-center">
                        {
                            (this.state.error.length) ?
                                <div className="col-12 col-md-7">
                                    <div className="row alert alert-danger">
                                        <p>{ this.state.error }</p>
                                    </div>
                                </div>
                            : ''
                        }   
                        <div className="col-12 col-md-7">
                            <div className="row">
                                <div className="col-12 col-md-6 p-1 mb-5">
                                    <TextValidator
                                        label="Name"
                                        className="form-control"
                                        onChange={handleForm}
                                        name="name"
                                        value={ name }
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
                                        validators={['required', 'isEmail']}
                                        errorMessages={['this field is required', 'email is not valid']}
                                    />
                                    {/* <input type="email" className="form-control" placeholder="Email" name="email" onChange={ this.handleForm } value={ this.state.user.email } /> */}
                                </div>
                                <div className="col-12 col-md-6 p-1 mb-5">
                                    <TextValidator
                                        type="password"
                                        label="Password"
                                        className="form-control"
                                        onChange={handleForm}
                                        name="password"
                                        value={password}
                                        validators={['required', 'minStringLength: 5', 'maxStringLength: 35']}
                                        errorMessages={['this field is required', 'password must be 5 characters', 'password max 35 characters']}
                                    />
                                </div>
                                <div className="col-12 col-md-6 p-1 mb-5">
                                    <TextValidator
                                        type="password"
                                        label="Re-Password"
                                        className="form-control"
                                        onChange={handleForm}
                                        name="rePassword"
                                        value={rePassword}
                                        validators={['required', 'minStringLength: 5', 'maxStringLength: 35']}
                                        errorMessages={['this field is required', 're-password must be 5 characters', 're-password max 35 characters']}
                                    />
                                </div>
                                <div className="col-12 col-md-12 p-1 mb-5">
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
                                        label="Address"
                                        className="form-control"
                                        onChange={handleForm}
                                        name="address"
                                        value={address}
                                        validators={['required', 'minStringLength: 5']}
                                        errorMessages={['this field is required', 'Address must be 5 character']}
                                    />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-2 mt-5">
                        <div className="col-12 col-md-7 p-1">
                            <button type="submit" className="btn background-cream font-weight-bold button-hover" style={{ width: "100%" }}>Register</button>
                        </div>
                    </div>
                    </ValidatorForm>
                    <div className="row justify-content-center pt-2">
                        <p className="text-center">You have an account? <a href="/login">Login here</a></p>
                    </div>
                </div>
            </main>
        );
    }
}
 
const mapStateToProps = state => {
    return{
        user : state.auth.user.data
    }
}

export default connect(mapStateToProps)(Register);
