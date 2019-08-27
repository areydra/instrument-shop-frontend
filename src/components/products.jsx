import React, { Component } from 'react';
import ModalProduct from './modals/modalProduct'
import ProductsCard from './card/productsCard'

import products from '../data/products'
import categories from '../data/products'

class Products extends Component {
    state = { 
        products : []
     }

     componentDidMount(){
        this.setState({products})
    }
         
    
    render() { 
        let products = this.state.products.filter(prod => prod.id_category == this.props.match.params.id)
        return ( 
            <React.Fragment>
                <ModalProduct action="Add" class="btn button-add"/>
                <div className="row pt-5">
                    <div className="card-group">
                        {products.map(prd => (
                            <ProductsCard key={prd.id} product={prd}/>
                        ))}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Products;