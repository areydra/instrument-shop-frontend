import React from 'react';
import { Link } from 'react-router-dom'

const ProductsCard = props => {
    return ( 
        <div className="col-md-2 mr-3 mb-3 background-color border-none-important" style={{ borderRadius: '25px' }}>
            <Link to={{ pathname: "/product-details/" + props.product.name, state:{ products : props.products }}}  style={{ color: 'black', textDecoration: 'none' }}>
                <div className="card background-color border-none-important">
                    <img src={props.product.image_url} className="card-img-top pt-3" alt="..." style={{ height: '150px' }} />
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{color: 'black'}}>{props.product.name}</h5>
                    </div>
                </div>
            </Link>
        </div>
     );
}
 
export default ProductsCard;