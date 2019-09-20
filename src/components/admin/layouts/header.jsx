import React from 'react'
import localStorage from 'local-storage'

import Brand from '../../../assets/logo/Brand.png'

const handleLogout = () => {
    localStorage.clear()
    window.location = '/login'
}

const Header = () => {
    if(localStorage.get('user')){
        if(localStorage.get('user').id_level !== 1){
            window.location = '/'
        }
    }else{
        window.location = '/'
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md background-cream fixed-top">
                <a className="navbar-brand text-dark" href="/admin">
                    <ul className="p-0 m-0">
                        <li className="d-inline-block align-middle"><img src={ Brand } width="100" height="50" className="d-inline-block align-top" alt="logo"/></li>
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
                            <p className="nav-link text-dark cursor-pointer" onClick={ () => handleLogout() }>Logout</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
      );
}
 
export default Header;