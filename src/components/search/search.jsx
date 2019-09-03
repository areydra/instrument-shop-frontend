import React, {Component} from 'react';
import search from '../../assets/icons/search.png'
import SearchSetting from './searchSetting'

class Search extends Component {
    state = { 
        search : ''
     }

    handleSearch = event => {
        this.setState({search : event.target.value})
    }

    search = event => {
        if(event.keyCode === 13){
            window.location = (this.state.search) ? `/products/search/${this.state.search}/page/1` : `/products/search/all/page/1`
        }
    }

    render() { 
        return ( 
            <div className="row pb-3">
                <div className="col-md-11">
                    <div className="input-group box-shadow">
                        <div className="input-group-prepend">
                            <div className="input-group-text background-none">                                
                                <a href={(this.state.search) ? `/products/search/${this.state.search}/page/1` : `/products/search/all/page/1`}>
                                    <img src={search} alt="COGS" style={{ width: '20px' }} />
                                </a>
                            </div>
                        </div>
                        <input type="text" placeholder="Search" className="form-control border-left-important" onKeyUp={this.search} onChange={this.handleSearch} />
                    </div>
                </div>
                <SearchSetting />
            </div>
         );
    }
}
 
export default Search;