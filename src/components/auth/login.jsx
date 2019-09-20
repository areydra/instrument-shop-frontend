import React, { Component } from 'react'
import { connect } from 'react-redux'
import localStorage from 'local-storage'
import Swal from 'sweetalert2'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { login } from '../../publics/redux/actions/auth'

class Login extends Component {
    state = { 
        user : {
            email : '',
            password : ''
        },
        token : '',
        error : {}
     }

     componentDidMount = async() => {
         if(localStorage.get('token')) {
             window.location = '/'
         }
     }

     handleForm = async event => {
         let user = { ...this.state.user }
         user[event.target.name] = event.target.value
         await this.setState({ user })
     }

     handleLogin = async() => {
        await this.props.dispatch(login(this.state.user))

        if (this.props.error) {
            let user = { ...this.state.user }
            user['password'] = ''

            await this.setState({ error: this.props.error.message, user })
        }else{
            await localStorage.set('token', this.props.user.token)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })

            Toast.fire({
                type: 'success',
                title: 'Signed in successfully'
            }).then(()=>{
                if(this.props.user.id_level === 1){
                    window.location = '/admin'
                }else{
                    window.location = '/'
                }
            })
        }
     }

    render() { 
        let handleForm = this.handleForm
        let { email, password } = this.state.user
        return (
            <main style={{ margin: "30.5vh 0 25vh 0" }}>
                <div className="container p-4">
                    <div className="row">
                        <h2 className="w-100 text-center">Login</h2>
                    </div>
                    {
                        (this.state.error.length) ?
                            <div className="row justify-content-center">
                                <div className="col-9 col-md-5 alert alert-danger text-center">
                                    <p>{this.state.error}</p>
                                </div>
                            </div>
                        : ''
                    }
                    <div className="row justify-content-center">
                        <div className="col-9 col-md-5">
                            <ValidatorForm
                                ref="form"
                                onSubmit={ this.handleLogin }
                            >
                                <TextValidator
                                    label="Email"
                                    className="form-control mb-5"
                                    onChange={ handleForm }
                                    name="email"
                                    value={ email }
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />
                                <TextValidator
                                    label="Password"
                                    type="password"
                                    className="form-control mb-5"
                                    onChange={ handleForm }
                                    name="password"
                                    value={ password }
                                    validators={['required']}
                                    errorMessages={['this field is required', 'password is not valid']}
                                />
                                <button type="submit" className="btn background-cream mt-2 form-control button-hover">Login</button>
                            </ValidatorForm>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-2">
                        <p className="text-center">You don't have an account? <a href="/register">Register here</a></p>
                    </div>
                </div>
            </main>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        error : state.auth.user.error,
        user : state.auth.user.responses
    }
}

export default connect(mapStateToProps)(Login);