import React from 'react';
import { Link } from 'react-router-dom'

import ModalProduct from '../modals/modalProduct'

import Harp from '../../assets/Harp.png'

const CategoryCard = () => {
    return ( 
        <React.Fragment>
            <ModalProduct action="Add" class="btn button-add"/>
            <div className="row pt-5">
                <div className="card-group">
                    <div className="col-md-3 p-2">
                        <Link to="/product-details"  style={{ color: 'black', textDecoration: 'none' }}>
                            <div className="card" style={{border: 'none !important', background: '#F5D372', borderRadius: '25px'}}>
                                <img src={Harp} className="card-img-top pt-3" alt="..." style={{height: '150px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{color: 'black'}}>Harp</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 p-2">
                        <Link to="/product-details"  style={{ color: 'black', textDecoration: 'none' }}>
                            <div className="card" style={{ border: 'none !important', background: '#F5D372', borderRadius: '25px' }}>
                                <img src={Harp} className="card-img-top pt-3" alt="..." style={{ height: '150px' }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{color: 'black'}}>Harp</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 p-2">
                        <Link to="/product-details"  style={{ color: 'black', textDecoration: 'none' }}>
                            <div className="card" style={{ border: 'none !important', background: '#F5D372', borderRadius: '25px' }}>
                                <img src={Harp} className="card-img-top pt-3" alt="..." style={{ height: '150px' }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{color: 'black'}}>Harp</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default CategoryCard;