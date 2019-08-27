import React from 'react';
import { Link } from 'react-router-dom'

const HomeCard = props => {
    let { name, imageUrl } = props.category
    return ( 
        <React.Fragment>
            <div className="col-md-3 p-2">
                        <div className="card" style={{ border: 'none !important', background: '#F5D372', borderRadius: '25px' }}>
                            <Link to={"products/category/" + name.toLowerCase()} style={{color: 'black', textDecoration: 'none'}}>
                                <div className="row">
                                    <div className="col-md-5" style={{ paddingTop: '25%' }}>
                                        <h5 className="card-title text-right">{name}</h5>
                                    </div>
                                    <div className="col-md-7" style={{ paddingLeft: '0px !important' }}>
                                        <img src={imageUrl} className="card-img-top pt-3 pb-3" alt="..." style={{ height: '200px' }} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
        </React.Fragment>
     );
}
 
export default HomeCard;