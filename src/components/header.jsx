import React, { Component } from 'react'
import { connect } from 'react-redux'
import Brand from '../assets/logo/Brand.png'
import localStorage from 'local-storage'

import { getWishlistsByUser } from '../publics/redux/actions/wishlist'
import { getCartsByUser } from '../publics/redux/actions/carts'

class Header extends Component{
    state = {
        carts: 0,
        wishlists: 0
    }

    handleLogout = async () => {
        await localStorage.remove('token')
        window.location = '/login'
    }

    componentDidMount = async() => {
        if(localStorage.get('user')){
            let id_user = localStorage.get('user').id
            await this.props.dispatch(getWishlistsByUser(id_user))
            await this.props.dispatch(getCartsByUser(id_user))
    
            await this.setState({ wishlists: this.props.wishlists.length, carts: this.props.carts.length })
        }
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md background-cream fixed-top">
                    <a className="navbar-brand text-dark" href="/">
                        <ul className="p-0 m-0">
                            <li className="d-inline-block align-middle"><img src={Brand} width="100" height="50" className="d-inline-block align-top" alt="logo" /></li>
                            <li className="d-inline-block align-middle">Aneka Musik</li>
                        </ul>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {
                                (localStorage.get('token')) ?
                                    <li className="nav-item d-flex flex-columns">
                                        <a className="nav-link text-danger cursor-pointer" href="/wishlists">Your Wishlists ({this.state.wishlists})</a>
                                        <a className="nav-link text-danger cursor-pointer" href="/carts">Your Carts ({this.state.carts})</a>
                                        <a className="nav-link text-danger cursor-pointer" href="/transactions">Your Transactions</a>
                                        <a className="nav-link text-danger cursor-pointer" href="/request-instrument">Request Instrument</a>
                                        <p className="nav-link text-dark cursor-pointer" onClick={ this.handleLogout }>logout</p>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <a className="nav-link text-danger cursor-pointer" href="/request-instrument">Request Instrument</a>
                                        <a className="nav-link text-dark" href="/login">login</a>
                                    </li>
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        carts : state.carts.carts,
        wishlists : state.wishlists.wishlists
    }
}

export default connect(mapStateToProps)(Header);