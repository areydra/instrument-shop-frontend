import React, { Component } from 'react'

import Pagination from '../utilities/pagination'
import Search from '../utilities/search'
import Table from '../utilities/table'
import Modal from '../utilities/modal'

class Product extends Component {
    state = { 
     }

     render() { 
        return (
            <div className="col-12 col-md-10 pt-4 pr-md-4">
                <Search />
                <div className="row p-3 pt-4">
                    <Modal />
                    <Table />
                    <Pagination />
                </div>
            </div>
        );
   }
}
  
export default Product;