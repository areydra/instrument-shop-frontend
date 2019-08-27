import React from 'react';
import { Link } from 'react-router-dom'

const ProductsCard = props => {
    return ( 
        <div className="col-md-3 p-2">
            <Link to={"/product-details/" + props.product.name}  style={{ color: 'black', textDecoration: 'none' }}>
                <div className="card" style={{ border: 'none !important', background: '#F5D372', borderRadius: '25px' }}>
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