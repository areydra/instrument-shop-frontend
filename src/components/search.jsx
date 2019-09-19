import React, { Component } from 'react'

import SearchIcon from '../assets/icons/search.png'
import Option from '../assets/icons/option.png'

class Search extends Component {
    state = { 
        search : '',
        limit: process.env.REACT_APP_LIMIT_PAGE
     }

    handleForm = async event => {
        let search = event.target.value
        await this.setState({ search: search })
    }

    handleSearchEnter = event => {
        let { search, limit } = this.state
        if (event.keyCode === 13) window.location = (search) ? `/products/search/${search}/0/${limit}` : `/products/search/all/0/${limit}`
    }

    handleSearch = () => {
        let { search, limit } = this.state
        window.location = (search) ? `/products/search/${search}/0/${limit}` : `/products/search/all/0/${limit}`
    }

    render() { 
        return (
            <div className="container p-4" style={{ marginTop: '12vh' }}>
                <div className="row">
                    <div className="col-12 col-md-11">
                        <div className="input-group box-shadow" >
                            <div className="input-group-prepend cursor-pointer">
                                <span className="input-group-text" style={{ background: 'none' }} onClick={this.handleSearch} ><img src={SearchIcon} height="24px" alt="search" /></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Search here..." style={{ borderLeft: 'none' }} name="search" onKeyUp={ this.handleSearchEnter } onChange={ this.handleForm } />
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-1 align-self-center p-1 text-center box-shadow rounded">
                        <img src={Option} width="25" alt="..." />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Search;
