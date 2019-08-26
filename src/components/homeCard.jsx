import React from 'react';
import { Link } from 'react-router-dom'
import AddCategory from './addCategory'

import Harp from '../assets/Harp.png'

const HomeCard = () => {
    return ( 
        <React.Fragment>
            <AddCategory/>
            <div className="row pt-5">
                <div className="card-group">
                    <div className="col-md-3 p-2">
                        <div className="card" style={{ border: 'none !important', background: '#F5D372', borderRadius: '25px' }}>
                            <Link to="details-category" style={{color: 'black', textDecoration: 'none'}}>
                                <div className="row">
                                    <div className="col-md-5" style={{ paddingTop: '25%' }}>
                                        <h5 className="card-title text-right">Harp</h5>
                                    </div>
                                    <div className="col-md-7" style={{ paddingLeft: '0px !important' }}>
                                        <img src={Harp} className="card-img-top pt-3 pb-3" alt="..." style={{ height: '200px' }} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card" style={{ border: 'none !important', background: '#F5D372', borderRadius: '25px' }}>
                            <Link to="details-category" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className="row">
                                    <div className="col-md-5" style={{ paddingTop: '25%' }}>
                                        <h5 className="card-title text-right">Harp</h5>
                                    </div>
                                    <div className="col-md-7" style={{ paddingLeft: '0px !important' }}>
                                        <img src={Harp} className="card-img-top pt-3 pb-3" alt="..." style={{ height: '200px' }} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card" style={{ border: 'none !important', background: '#F5D372', borderRadius: '25px' }}>
                            <Link to="details-category" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className="row">
                                    <div className="col-md-5" style={{ paddingTop: '25%' }}>
                                        <h5 className="card-title text-right">Harp</h5>
                                    </div>
                                    <div className="col-md-7" style={{ paddingLeft: '0px !important' }}>
                                        <img src={Harp} className="card-img-top pt-3 pb-3" alt="..." style={{ height: '200px' }} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

     );
}
 
export default HomeCard;