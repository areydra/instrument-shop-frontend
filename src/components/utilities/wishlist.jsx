import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getWishlistDetails } from '../../publics/redux/actions/wishlist'

class Wishlist extends Component {
    state = {
        wishlist: []
    }

    componentDidMount = async () => {
        await this.props.dispatch(getWishlistDetails(this.props.id_user, this.props.id_product))
        await this.setState({ wishlist: this.props.wishlist[0] })
    }

    render() {
        return(
            <span className="mr-1 align-self-center">
                {
                    (this.state.wishlist) ?
                        <span className="text-danger">In your wishlist | </span>
                    : 
                        <span className="text-danger cursor-pointer" onClick={() =>  (this.props.addToWishlist(this.props.id_user, this.props.id_product), this.setState({ wishlist: {id:1} }))  }>
                            Add to Wishlist  |
                        </span>
                }
            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        wishlist : state.wishlists.wishlists
    }
}

export default connect(mapStateToProps)(Wishlist);