import React, { Component } from 'react'
import { connect } from 'react-redux'
import localStorage from 'local-storage'
import Swal from 'sweetalert2'

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
        let user = { ...this.state.user }
        user['password'] = ''
        user['rePassword'] = ''

        if(this.state.user.password !== this.state.user.rePassword){
            await this.setState({ user, error: "password does not match with re-password" }) 
        }else{
            delete this.state.user.rePassword
            await this.setState({ error: {} })
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
                }).then(()=>{
                    window.location = '/'
                })

            })
        }
        
    }

    render() { 
        return (
            <main style={{ margin: "12.5vh 0 1vh 0" }}>
                <div className="container p-4">
                    <div className="row">
                        <h2 className="w-100 text-center">Register</h2>
                    </div>
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
                                <div className="col-12 col-md-6 p-1">
                                    <input type="text" className="form-control" placeholder="Name" name="name" onChange={ this.handleForm } value={ this.state.user.name } />
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <input type="email" className="form-control" placeholder="Email" name="email" onChange={ this.handleForm } value={ this.state.user.email } />
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={ this.handleForm } value={ this.state.user.password } />
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <input type="password" className="form-control" placeholder="Re-Password" name="rePassword" onChange={ this.handleForm } value={ this.state.user.rePassword } />
                                </div>
                                <div className="col-12 col-md-12 p-1">
                                    <input type="text" className="form-control" placeholder="phone number" name="telephone" onChange={this.handleForm} value={this.state.user.telephone} />
                                </div>
                                <div className="col-12 col-md-12 p-1">
                                    <textarea className="form-control" cols="30" rows="10" placeholder="Address" name="address" onChange={ this.handleForm } value={ this.state.user.address } ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-2">
                        <div className="col-12 col-md-7 p-1">
                            <button className="btn background-cream font-weight-bold button-hover" style={{ width: "100%" }} onClick={ this.handleRegister } >Register</button>
                        </div>
                    </div>
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
