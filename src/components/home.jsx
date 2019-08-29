import React, { Component } from 'react';
import ModalCategory from './modals/modalCategory'
import HomeCard from './card/homeCard'
import categories from '../data/categories'

class Home extends Component {
    state = {
        categories : [],
        category: null
    }

    componentDidMount = () => { //didMount otomatis dijalankan. biasanya digunakan untuk mengisi data state atau lainnya
        this.setState({ categories })
    }
    
    addCategory = async category => {
        await this.setState({ category }) //tunggu hinga proses setState category selesai. Setelah selesai kemudian jalankan conditional dibawa
        
        if (this.state.category !== null && category !== null && category.name !== '') { //jika tidak ada yg kosong, maka jalankan code didalam kondisinya
            let newCategories = [];
            newCategories.push(...this.state.categories, this.state.category)  //menggabungkan object state categories yg telah di spread/dipecah, dan state category

            this.setState({categories:newCategories}) //mengubah state categories dengan newCategories
        }    
    }
    
    render() {
        return ( 
            <React.Fragment>
                <ModalCategory onAddCategory={this.addCategory} />
                <div className="row pt-5">
                    <div className="card-group col-md-12">
                        {this.state.categories.map(cat => (
                            <HomeCard key={cat.id} category={cat} categories={categories} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;

//Kenapa category ? karna card home berisi category category alat musik