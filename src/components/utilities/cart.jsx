import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCartDetails } from '../../publics/redux/actions/carts'

class Cart extends Component {
    state = {
        carts: []
    }

    componentDidMount = async () => {
        await this.props.dispatch(getCartDetails(this.props.id_user, this.props.id_product))
        await this.setState({ carts: this.props.carts[0] })
    }

    render() {
        return (
            <span className="mr-1 align-self-center">
                {
                    (this.state.carts) ?
                        <span className="text-danger">In your carts  </span>
                        :
                        <span className="text-danger cursor-pointer" onClick={() => (this.props.addToCart(this.props.id_user, this.props.id_product), this.setState({ carts: { id: 1 } }))}>
                            Add to Cart
                        </span>
                }
            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        carts: state.carts.carts
    }
}

export default connect(mapStateToProps)(Cart);