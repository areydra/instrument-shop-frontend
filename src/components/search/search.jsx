import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import search from '../../assets/icons/search.png'
import SearchSetting from './searchSetting'

class Search extends Component {
    state = { 
        search : ''
     }

    handleSearch = event => {
        this.setState({search : event.target.value})
    }

    render() { 
        return ( 
            <div className="row pb-3">
                <div className="col-md-11">
                    <div className="input-group box-shadow">
                        <div className="input-group-prepend">
                            <div className="input-group-text background-none">                                
                                <Link to={(this.state.search) ? '/products/search/' + this.state.search : '/products/search/all'}>
                                    <img src={search} alt="COGS" style={{ width: '20px' }} />
                                </Link>
                            </div>
                        </div>
                        <input type="text" placeholder="Search" className="form-control border-left-important" onChange={this.handleSearch} />
                    </div>
                </div>
                <SearchSetting />
            </div>
         );
    }
}
 
export default Search;