import React, { Component, Fragment } from 'react';

import products from '../data/products'
import ProductsCard from './card/productsCard'
import ModalAddProduct from './modals/modalAddProduct'

class Products extends Component {
    state = { 
        products: [],
    }

    componentDidMount = async () => {
       await this.setState({ products }) //jalankan setState sampai selesai (sampai tersimpan kedalam state) kemudian console.log. jika tidak await maka akan null (data belum tersimpan ke state)
    }

    addProduct = async newProduct => {
        let products = []
        if(newProduct.name !== null && newProduct.name !== ''){
            products.push(...this.state.products, newProduct)
            await this.setState({ products })
        }
    }

    render() {
        let products = []
        
        
        //Jika ada params id (cek di main.jsx untuk melihat router) maka jalankan if statement berikut
        if (this.props.match.params.id){
            if(this.props.match.params.id.length > 4){
                return (
                    <div className="alert alert-danger" style={{ marginTop: '100px' }}>
                        <h1><strong>Alert!</strong></h1><h3> 404 not found</h3>
                    </div>
                )
            }
            products = this.state.products.filter(product => product.id_category == this.props.match.params.id) //.filter() kembalikan data yg product.id_category ssama dengan params.id (parseInt digunakan karna params bersifat string)
        } 

        //Jika ada params name (cek di main.jsx untuk melihat router) maka jalankan if statement berikut
        if (this.props.match.params.name) (this.props.match.params.name === 'all') ? products = this.state.products : products = this.state.products.filter(product => product.name.toLowerCase() === this.props.match.params.name.toLowerCase()) //lowerCase() agar user bisa mencari product dengan huruf kecil tanpa harus spesifik seperti name productnya

        console.log(this.state.products)

        return (
            <Fragment>
                <ModalAddProduct action="Add" class="btn button-add" onAddProduct={this.addProduct} />
                <div className="row pt-5">
                    <div className="card-group col-md-12">
                        {products.map(prd => (
                            <ProductsCard key={prd.id} product={prd} />
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Products;