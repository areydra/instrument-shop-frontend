import React from 'react'

const Wishlist = props => {
    return ( 
        <span className="mr-1 align-self-center">
            <span className="text-danger cursor-pointer" onClick={() => props.addToWishlist(props.id_user, props.id_product)}>Add to Wishlist  </span>
        </span>
     );
}
 
export default Wishlist;