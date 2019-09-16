import React from 'react'
import Searchpng from '../../../assets/icons/search.png'
import Option from '../../../assets/icons/option.png'

const Search = () => {
    return ( 
        <div className="row">
            <div className="col-12 col-md-11">
                <div className="input-group box-shadow" >
                    <div className="input-group-prepend cursor-pointer">
                        <span className="input-group-text" style={{background: 'none'}}><img src={ Searchpng } height="24px" alt="..." /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search here..." style={{borderLeft: "none"}} />
                </div>
            </div>
            <div className="d-none d-md-block col-md-1 align-self-center p-1 text-center box-shadow rounded">
                <img src={ Option } width="25" alt="..." />
            </div>
        </div>
     );
}
 
export default Search;