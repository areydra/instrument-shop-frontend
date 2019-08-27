import React, { Component } from 'react';
import ModalCategory from './modals/modalCategory'
import HomeCard from './card/homeCard'
import categories from '../data/categories'

class Home extends Component {
    state = { 
        categories : []
     }
     componentDidMount(){
         this.setState({categories})
     }
    render() { 
        return ( 
            <React.Fragment>
                <ModalCategory />
                <div className="row pt-5">
                    <div className="card-group">
                        {this.state.categories.map(cat => (
                            <HomeCard key={cat.id} category={cat}/>
                        ))}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;

