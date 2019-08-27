import React, { Component } from 'react';
import ModalCategory from './modals/modalCategory'
import CategoryCard from './card/categoryCard'
import categories from '../data/categories'

class Home extends Component {
    state = { 
        categories: categories
     }

    render() { 
        return ( 
            <React.Fragment>
                <ModalCategory />
                <div className="row pt-5">
                    <div className="card-group">
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

