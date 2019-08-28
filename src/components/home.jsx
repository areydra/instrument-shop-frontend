import React, { Component } from 'react';
import ModalCategory from './modals/modalCategory'
import CategoryCard from './card/categoryCard'
import categories from '../data/categories'

class Home extends Component {
    state = { 
        categories: categories,
        category: {}
    }

    handleAdd = async category => { //async digunakan untuk memanggil callback setelah seleai digunakan. lihat then yg ada di modalCategory. dan juga sebagai asynchronus
        this.setState({ category })
        this.componentDidMount()
    }

    componentDidMount = async () =>{
        let categories = [];

        await categories.push(...this.state.categories); //membuat array categories baru dengan spreadoperator //await digunakan untuk mengunggu semua dirender baru menjalankan yg await
        if (this.state.category.name || this.state.category.image_url) {
            categories.push(this.state.category) //jika ada category tambahkan categories baru dengan category baru
            this.setState({ category: {} })
        } else {
            categories = this.state.categories //jika tidak terpenuhi ubah categories baru isinya sesuai state.categories lama
        }
        this.setState({ categories })
    }

     render() { 
         console.log(this.state.category)
        return ( 
            <React.Fragment>
                <ModalCategory onAdd={this.handleAdd} />
                <div className="row pt-5">
                    <div className="card-group col-md-12">
                        {this.state.categories.map(cat => (
                            <CategoryCard key={cat.id} category={cat}/>
                        ))}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;

