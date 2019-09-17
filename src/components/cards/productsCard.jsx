import React from 'react'
import { Link } from 'react-router-dom'

const ProductsCard = props => {
    return (
    <React.Fragment>
        {
            props.products.map(product => (
                <div className="col-sm-3 p-2" key={ product.id }>
                    <Link to={"/product-details/" + product.name.toLowerCase()} style={{ textDecoration: 'none' }}>
                        <div className="card border-radius background-cream cursor-pointer">
                            <div className="card-body d-flex flex-column p-2">
                                <div className="align-self-center">
                                    <img className="img-fluid max-height-img" src={ product.image }
                                        alt=".." />
                                </div>
                                <div className="align-self-center pt-3">
                                    <p className="card-title text-dark text-center product-font-size">
                                        { 
                                            (product.name.length > 29) ? product.name.substr(0, 29) + '...' : product.name
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))
        }
    </React.Fragment>
    );
}

export default ProductsCard;
