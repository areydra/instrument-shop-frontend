import React from 'react';
import Brand from '../../assets/icons/Brand.png'

const Navbar = () => {
    return ( 
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm background-color">
            <h5 className="my-0 mr-md-auto font-weight-normal"><a href="/"><img src={Brand} alt="COKS" width="100px"></img></a></h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#" style={{fontWeight:'bold'}}>Login</a>
            </nav>
        </div>
     );
}
 
export default Navbar;