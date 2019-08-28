import React, { Component } from 'react';
import ModalProduct from './modals/modalProduct'
import ProductsCard from './card/productsCard'

import products from '../data/products'

class Products extends Component {
    state = { 
        products : products,
        newProducts : {},
     }
    constructor() {
        super();
        this.handelAdd = this.handelAdd.bind(this);
    }

    handelAdd = product => {
        // if(!this.product){
        //     console.log('kosong')
        // }else{
            console.log(product.length)
        // }
    }
    
    render() { 
        let products = '';
        if(this.props.match.params.name) {
            if(this.props.match.params.name === 'all'){
                products = this.state.products
            }else{
                products = this.state.products.filter(prod => prod.name.toLowerCase() === this.props.match.params.name.toLowerCase())    
            }
        }else{
            products = this.state.products.filter(prod => prod.id_category === this.props.match.params.id)
        }

        console.log(this.state.newProducts)
        return ( 
            <React.Fragment>
                <ModalProduct action="Add" class="btn button-add" onAddProduct={this.handleAdd}/>
                <div className="row pt-5">
                    <div className="card-group col-md-12">
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