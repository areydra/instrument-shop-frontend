import React from 'react'
import Brand from '../assets/logo/Brand.png'
import Search from '../assets/icons/search.png'
import Option from '../assets/icons/option.png'

const Header = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-md background-cream fixed-top">
                <a className="navbar-brand text-dark" href="/">
                    <ul className="p-0 m-0">
                        <li className="d-inline-block align-middle"><img src={ Brand } width="100" height="50" className="d-inline-block align-top" alt="logo" /></li>
                        <li className="d-inline-block align-middle">Aneka Musik</li>
                    </ul>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container p-4" style={{marginTop: '12vh'}}>
                <div className="row">
                    <div className="col-12 col-md-11">
                        <div className="input-group box-shadow" >
                            <div className="input-group-prepend cursor-pointer">
                                <span className="input-group-text" style={{background: 'none'}}><img src={ Search } height="24px" alt="search" /></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Search here..." style={{borderLeft: 'none'}} />
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-1 align-self-center p-1 text-center box-shadow rounded">
                        <img src={ Option } width="25" alt="..." />
                    </div>
                </div>
            </div>        
        </header>
     );
}
 
export default Header;