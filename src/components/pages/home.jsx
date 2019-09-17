import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'

import { getCategories } from '../../publics/redux/actions/categories'
import HomeCard from '../cards/homeCard'

class Home extends Component {
    state = { 
        categories : []
     }

     componentDidMount = async() => {
        await this.props.dispatch(getCategories())
        await this.setState({ categories : this.props.categories })
     }

    render() { 
        let { categories } = this.state
        if(categories.length){
            return ( 
                <Fragment>
                    <HomeCard categories={ categories } />                                
                </Fragment>
             );
        }else{
            return (
                <div className="text-center w-100" style={{ margin: '27vh 0 25.5vh 0' }}>
                    <Spinner type="grow" color="warning" />
                </div>
            )
        }
    }
}
 
const mapStateToProps = state => {
    return {
        categories : state.categories.categories
    }
}

export default connect(mapStateToProps)(Home);