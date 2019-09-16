import React, { Component, Fragment } from 'react'

class ProductDetails extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className="row p-3 pt-4">
                    <div className="col-12 col-md-4">
                        <img className="img-fluid" src="https://i.imgur.com/3W4bCSh.png" alt="..." />
                    </div>
                    <div className="col">
                        <div className="row d-flex">
                            <div className="mr-auto">
                                <h3>Yamaha blabla</h3>
                            </div>
                            <span className="mr-1 align-self-center">
                                <span className="text-danger">Whislist</span>
                                |
                            </span>
                            <span className="ml-1 align-self-center">
                                <span className="text-danger">Add to Cart</span>
                            </span>
                        </div>
                        <div className="row d-flex pt-3 border-bottom">
                            <div className="mr-auto">
                                <h5>Rp. 1500000</h5>
                            </div>
                            <span className="mr-1 align-self-center">
                                <span><span className="text-danger" style={{ fontWeight: "bold"}}>Stok Terbatas! </span> Tersedia >30 </span>
                            </span>
                        </div>
                        <div className="row pt-2">
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos ex cumque dolorum nostrum consequuntur perspiciatis reiciendis. Voluptatum libero alias fugiat laudantium delectus modi aperiam quod est, autem laboriosam. Ea illum praesentium vero, assumenda itaque ducimus quibusdam? Delectus at consectetur accusamus pariatur magnam voluptates iusto cum aspernatur modi eaque accusantium dicta, repellat dolores, expedita assumenda perferendis enim in sapiente quo, cumque minima quidem ut? Ab mollitia provident beatae aliquam, alias saepe sit impedit nulla perferendis rem iste iure aspernatur nemo veniam repellat harum ducimus. Facilis aperiam laboriosam enim error? Eaque consequuntur quos eveniet enim tempore. Nemo praesentium iste, doloremque laboriosam maxime repellat, asperiores quas numquam est voluptas placeat voluptatum recusandae odit esse libero aspernatur autem quos? Repellat magnam aut repudiandae ullam libero ea vel reprehenderit eius quaerat. Quas voluptatem autem dolorum odio, consectetur iste. Distinctio dolorum, natus beatae autem nesciunt porro sint. Inventore nam dolor cumque molestias illo optio nisi.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProductDetails;