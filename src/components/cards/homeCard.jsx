import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = props => {
    return ( 
        <React.Fragment>
            {
                props.categories.map(category => (
                    <div className="col-sm-3 p-2" key={ category.id }>
                        <Link to={"/products/category/" + category.name.toLowerCase()} style={{ textDecoration: 'none' }}>
                            <div className="card background-cream border-radius cursor-pointer">
                                <div className="card-body d-flex flex-row p-2 align-self-center">
                                    <div className="align-self-center">
                                        <h5 className="card-title text-dark">{ category.name }</h5>
                                    </div>
                                    <div>
                                        <img className="img-fluid max-height-img" src={ category.image } alt=".." />
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
 
export default HomeCard;