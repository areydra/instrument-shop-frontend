import React, { Component } from 'react';
import {connect} from 'react-redux' 

import ModalCategory from './modals/modalCategory'
import HomeCard from './card/homeCard'
import {getCategories, postCategory} from '../publics/redux/actions/categories'

class Home extends Component {
    state = {
        categories : [],
    }

    componentDidMount = async () => {
        await this.props.dispatch(getCategories()) //menggunakan function getCategories() dari mapToDispatch dibawah
        this.setState({categories:this.props.categories}) //mengambil variabel categories dari mapStatToProps dibawah
    }

    addNewCategory = async newCategory => {
        await this.props.dispatch(postCategory(newCategory))
        await this.props.dispatch(getCategories())
        this.setState({ categories: this.props.categories })

    }

    render() {        
        return ( 
            <React.Fragment>
                <ModalCategory categories={this.state.categories} onAddCategory={this.addNewCategory} />
                <div className="row pt-5">
                    <div className="card-group col-md-12">
                        {this.state.categories.map(cat => (
                            <HomeCard key={cat.id} category={cat} categories={this.state.categories} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
            );
    }
}
 
const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories //membuat props categories dengan value state.categories
    }
} 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getCategories : () => dispatch(this.getCategories()) //paramaeter products berasal dari import getCategories diatas
//     }
// }
export default connect(mapStateToProps)(Home);