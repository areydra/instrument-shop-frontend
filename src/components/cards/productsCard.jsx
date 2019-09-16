import React from 'react'

const ProductsCard = props => {
    return (
    <React.Fragment>
        <div className="col-sm-3 p-2">
            <div className="card border-radius background-cream cursor-pointer">
                <div className="card-body d-flex flex-column p-2 align-self-center">
                    <div>
                        <img className="img-fluid max-height-img" src="https://i.imgur.com/3W4bCSh.png"
                        alt=".." />
                    </div>
                    <div className="align-self-center pt-3">
                        <p className="card-title text-center product-font-size">Yamaha Violin A500</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="col-sm-3 p-2">
                <div className="card border-radius background-cream cursor-pointer">
                    <div className="card-body d-flex flex-column p-2 align-self-center">
                        <div>
                            <img className="img-fluid max-height-img" src="https://i.imgur.com/3W4bCSh.png"
                                alt=".." />
                        </div>
                        <div className="align-self-center pt-3">
                            <p className="card-title text-center product-font-size">Yamaha Violin A500</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 p-2">
                <div className="card border-radius background-cream cursor-pointer">
                    <div className="card-body d-flex flex-column p-2 align-self-center">
                        <div>
                            <img className="img-fluid max-height-img" src="https://i.imgur.com/3W4bCSh.png"
                                alt=".." />
                        </div>
                        <div className="align-self-center pt-3">
                            <p className="card-title text-center product-font-size">Yamaha Violin A500</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 p-2">
                <div className="card border-radius background-cream cursor-pointer">
                    <div className="card-body d-flex flex-column p-2 align-self-center">
                        <div>
                            <img className="img-fluid max-height-img" src="https://i.imgur.com/3W4bCSh.png"
                                alt=".." />
                        </div>
                        <div className="align-self-center pt-3">
                            <p className="card-title text-center product-font-size">Yamaha Violin A500</p>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    );
}

export default ProductsCard;
