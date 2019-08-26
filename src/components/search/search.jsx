import React from 'react';
import search from '../../assets/icons/search.png'
import SearchSetting from './searchSetting'

const Search = () => {
    return ( 
        <div className="row pb-3">
            <div className="col-md-11">
                <div className="input-group box-shadow">
                    <div className="input-group-prepend">
                        <div className="input-group-text background-none">
                            <a href="#">
                                <img src={search} alt="COGS" style={{width: '20px'}} />
                            </a>
                        </div>
                    </div>
                    <input type="text" placeholder="Search" className="form-control border-left-important"/>
                </div>
            </div>
            <SearchSetting />
        </div>
     );
}
 
export default Search;