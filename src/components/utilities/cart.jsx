import React from 'react'

const Cart = props => {
    return ( 
        <span className="ml-1 align-self-center">
            <span className="text-danger cursor-pointer" onClick={ () => props.addToCart(props.id_user, props.id_product) }>Add to Cart</span>
        </span>
     );
}
 
export default Cart;